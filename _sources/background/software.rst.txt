Software packages
=================

In many modeling applications, we wish to **sample** out of a distribution. That means that we randomly draw numbers out of the sample space of the distribution such that the probability of drawing a number less than :math:`x` is given by :math:`F(x)`. Sampling out of a distribution is often easier than computing the distribution over a range of values because many of those values are close to zero.

We may also want to have access to other properties about the distributions, like their PDF/PMF, CDF, quantiles, etc. We will focus on Python-based packages for working with distributions, and each vignette about a distribution includes syntax on how to use NumPy and SciPy tools. I also show how to use the distributions in the probabilistic programming language `Stan <http://mc-stan.org/>`_. In the future, I hope to add distributions/samplers available in `R <https://www.rdocumentation.org/packages/stats/versions/current/>`_ and `Julia <https://juliastats.org/Distributions.jl/stable/>`_.



Usage of NumPy
--------------

To use the the ``numpy.random`` module to sample out of a distribution, you first need to instantiate a random number generator (RNG) with a specified bit generator. The bit generator generates random bits, and then the RNG converts these to number following a specific probability distribution you want to sample out of. The default generator using the `PCG64 <https://docs.scipy.org/doc/numpy/reference/random/bit_generators/pcg64.html>`_ bit generator, which is a good choice to use. You can instantiate a random number generator with the default bit generator as follows.

.. code:: python

	import numpy.random

	rg = numpy.random.default_rng()


Alternatively, you can seed the random number generator to get a reproducible stream of random numbers.

.. code:: python

	rg = numpy.random.default_rng(seed=923841)

In the syntax in this app, I assume that a random number generator has already been instantiated and is called ``rg``. You can then use ``rg`` to draw random number out of a distribution, such as the Normal distribution.

.. code:: python

	# Draw a single random number from standard Normal
	rg.normal(loc=0, scale=1)

The syntax for drawing multiple samples involves use of the ``size`` keyword argument.

.. code:: python

	# Draw 20 random numbers from standard Normal
	rg.normal(loc=0, scale=1, size=20)

In this app, we always use `rg` for an instantiated generator, as is done in the NumPy documentation.

Using Numba
^^^^^^^^^^^

For some calculations you may want to `just-in-time compile <https://en.wikipedia.org/wiki/Just-in-time_compilation>`_ your code that does sampling using `Numba <https://numba.pydata.org/>`_. Numba currently only supports the Mersenne Twister bit generator. To use this, simply substitute ``numpy.random`` for ``rg`` in calls to NumPy random number generators. As an example, to get a JITted function to sample out of a Normal distribution, you would do the following.

.. code:: python

	import numpy.random
	import numba

	@numba.njit
	def draw_normal(loc=0.0, scale=1.0, size=1):
		"""Return array of Normally distributed random numbers."""
		return numpy.random.normal(loc=loc, scale=scale, size=size)


Usage of SciPy
--------------

The ``scipy.stats`` module is more feature-rich than the ``numpy.random`` package in that it allows more functionality beyond sampling out of a distribution. It also features more distributions. The module also has functions to perform statistical tests, transformations, and other statistical computation. Here, we will focus only on its distributions.

As described in the `documentation <https://docs.scipy.org/doc/scipy/reference/stats.html>`_, every distribution is an instance of a subclass of an `rv_continuous <https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.rv_continuous.html#scipy.stats.rv_continuous>`_ or `rv_discrete <https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.rv_discrete.html#scipy.stats.rv_discrete>`_ base class. These classes have useful methods, like ``rvs()``, which draws samples out of the distribution ``pmf()`` for discrete and ``cdf()`` for continuous, which return the value of the probability mass function or probability density function, and others. The instance is instantiated by supplying the appropriate parameters, which vary depending on the distribution. For example, the Normal distribution is implemented as `scipy.stats.normal`.

.. code:: python

	import scipy.stats

	# Instantiate subclass for standard Normal
	norm = scipy.stats.norm(loc=0, scale=1)

	# Draw 100 random numbers out of standard Normal
	norm.rvs(size=100)

If I wanted to compute the probability density function for specific values of :math:`x` and plot it, I could do the following.

.. bokeh-plot::
	:source-position: above

	import numpy as np
	import scipy.stats

	import bokeh.io
	import bokeh.plotting

	# Instantiate subclass for standard Normal
	norm = scipy.stats.norm(loc=0, scale=1)

	# Make PDF values
	x = np.linspace(-4, 4, 200)
	y_pdf = norm.pdf(x)

	# Make the plot
	p = bokeh.plotting.figure(height=200, width=300, x_axis_label='x', y_axis_label='f(x)')
	p.line(x, y_pdf, line_width=2)

	bokeh.io.show(p)

In the vignettes for each distribution, I show the syntax of how to instantiate the class using ``scipy.stats``, e.g., ``scipy.stats.norm(mu, sigma)``.


Usage of Stan
-------------

We follow `Stan's conventions for probability functions <https://mc-stan.org/docs/2_21/functions-reference/conventions-for-probability-functions.html>`_. Within a Stan program specifying a model, we would write 

.. code::

	y ~ normal(mu, sigma);

to specify that ``y`` is Normally distributed with parameters ``mu`` and ``sigma``. If we want to draw a random number from a distribution using Stan, we add a ``_rng`` suffix to the probability function name. To draw a random number from a Normal distribution and store it as ``x``, we do

.. code::

	x = normal_rng(mu, sigma);

Other suffixes are available, and the call signature can change depending on the suffix. For example, to compute the value of the logarithm of the PDF of the Normal distribution at point ``x``, we use ``normal_lpdf(x | mu, sigma)``.

In the syntax listed in the vignettes, I show the syntax used in a sampling statement. That is a statement like ``normal(mu, sigma)``.