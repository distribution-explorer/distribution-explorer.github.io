Review of key concepts
======================

Before preceding, we will make clear definitions of what information is included in this app. We cut some corners in our definitions here, but these definitions are functional for applied purposes.

A **probability distribution** specifies the probabilities of all of the possible outcomes in a sample space. For example, if the sample space is nonnegative integers, the probability distribution describes the probability of observing each nonnegative integer.


PMFs and PDFs
-------------

Probability distributions may be specified in various ways. For distributions describing discrete random variables, that is random variables that may take on only discrete values, such as integers, the **probability mass function** (PMF) is a useful specification of the distribution. In the discrete case, we define :math:`f(x)` to be the probability of obtaining discrete value :math:`x`. The **normalization condition** of the PMF is

.. math::

	\begin{align}
	\sum_x f(x) = 1,
	\end{align}

where the sum is over all possible values of :math:`x` in the sample space.

For continuous random variables, the probability of a given particular real number is zero. Instead, we can define a function called a **probability density function** such that the probability that a value of continuous variable :math:`x` is between :math:`a` and :math:`b` with :math:`a<b` is

.. math::

	\begin{align}
	P(a\le x\le b) = \int_a^b \mathrm{d}x\,f(x).
	\end{align}


CDFs
----

The **cumulative distribution function** (CDF), denoted :math:`F(x)`, is defined such that :math:`F(x)` is the probability that the value of a variable :math:`x` is less than or equal to :math:`x`.  For a  distribution describing a discrete random variable, the CDF is related to the PMF as

.. math::

	\begin{align}
	F(k) = \sum_{k'=k_\mathrm{min}}^k f(k'),
	\end{align}

where :math:`k_\mathrm{min}` is the minimal value the variable can take. For a continuous distribution, the CDF is related to the PDF by

.. math::

	\begin{align}
	f(x) = \frac{\mathrm{d}F}{\mathrm{d}x},
	\end{align}

or

.. math::

	\begin{align}
	F(x) = \int_{-\infty}^x\mathrm{d}x'\,f(x').
	\end{align}


Methods of plotting PDFs, PMFs and CDFs
---------------------------------------

To help in interpreting plots of the univariate PDFs, PMFs, and CDFs in this app, I show how each are plotted.


Plots of PDFs
^^^^^^^^^^^^^

We plot a PDF as a smooth curve. The curve only appears for values of the x-axis for which the distribution is supported; that is on the domain of the distribution. As an example, below is a plot of a PDF for the :ref:`gamma`, which is supported on the set of positive real numbers.

.. bokeh-plot::
	:source-position: none

	import numpy as np
	import scipy.stats

	import bokeh.io
	import bokeh.plotting

	# Instantiate subclass for Gamma
	gamma = scipy.stats.gamma(1.68, loc=0, scale=0.2)

	# Make PDF values
	x = np.linspace(0, 4, 200)
	y_pdf = gamma.pdf(x)

	# Make the plot
	p = bokeh.plotting.figure(height=200, width=300, x_axis_label='x', 
	y_axis_label='f(x; 1.68, 5)', title='Gamma PDF', x_range=[-0.15, 4], tools="save")
	p.line(x, y_pdf, line_width=2)
	p.background_fill_alpha = 0
	p.border_fill_alpha = 0

	bokeh.io.show(p)


Plots of PMFs
^^^^^^^^^^^^^

Since they take on discrete values, we plot PMFs differently. The convention in this app is that each nonzero probability is shown by a point with a line connecting to the x-axis. As an example, below is a plot of a :ref:`binomial` PMF.

.. bokeh-plot::
	:source-position: none

	import numpy as np
	import scipy.stats

	import bokeh.io
	import bokeh.plotting

	# Instantiate subclass for Binomial
	binom = scipy.stats.binom(20, 0.34)

	# Make PDF values
	x = np.arange(0, 21)
	y_pmf = binom.pmf(x)

	# Make the plot
	p = bokeh.plotting.figure(height=200, width=300, x_axis_label='n', 
	y_axis_label='f(n; 20, 0.34)', title='Binomial PMF', tools="save")

	p.circle(x, y_pmf, size=5)
	p.segment(x0=x, x1=x, y0=0, y1=y_pmf, line_width=2)
	p.background_fill_alpha = 0
	p.border_fill_alpha = 0

	bokeh.io.show(p)


Plots of CDFs for continuous distributions
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Plots of CDFs for continuous distributions are plotted as smooth curves. Taking the example of the Gamma distribution again, the CDF is plotted as below.

.. bokeh-plot::
	:source-position: none

	import numpy as np
	import scipy.stats

	import bokeh.io
	import bokeh.plotting

	# Instantiate subclass for Gamma
	gamma = scipy.stats.gamma(1.68, loc=0, scale=0.2)

	# Make PDF values
	x = np.linspace(-0.2, 4, 200)
	y_cdf = gamma.cdf(x)

	# Make the plot
	p = bokeh.plotting.figure(height=200, width=300, x_axis_label='x', 
	y_axis_label='F(x; 1.68, 5)', title='Gamma CDF', x_range=[-0.15, 4], tools="save")
	p.line(x, y_cdf, line_width=2)
	p.background_fill_alpha = 0
	p.border_fill_alpha = 0

	bokeh.io.show(p)


Plots of CDFs for discrete distributions
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

For discrete distributions, I plot the CDFs as "staircases," as shown below.

.. bokeh-plot::
	:source-position: none

	import numpy as np
	import scipy.stats

	import bokeh.io
	import bokeh.plotting

	x = np.arange(0, 21)
	x_size = x[-1] - x[0]
	x_c = np.empty(2*len(x))
	x_c[::2] = x
	x_c[1::2] = x
	x_c = np.concatenate(((max(x[0] - 0.05*x_size, x[0] - 0.95),), 
	                      x_c,
	                      (min(x[-1] + 0.05*x_size, x[-1] + 0.95),)))
	x_cdf = np.concatenate(((x_c[0],), x))

	y = scipy.stats.binom.cdf(x_cdf, 20, 0.34)
	y_c = np.empty_like(x_c)
	y_c[::2] = y
	y_c[1::2] = y

	p = bokeh.plotting.figure(plot_height=200,
	                          plot_width=300,
	                          x_axis_label='n',
	                          y_axis_label='F(n; 20, 0.34)',
	                          title='Binomial CDF', tools="save")
	p.line(x_c, y_c, line_width=2)
	p.background_fill_alpha = 0
	p.border_fill_alpha = 0

	bokeh.io.show(p)

The CDF appears to be multivalued at the vertical lines of the staircase. It is not. Furthermore, the lines at zero and one on the CDF axis should extend out to :math:`-\infty` and :math:`\infty`, respectively along the horizontal axis. Strictly speaking, the CDF should be plotted as follows.

.. bokeh-plot::
	:source-position: none

	import numpy as np
	import scipy.stats

	import bokeh.io
	import bokeh.plotting

	x = np.arange(0, 21)
	y = scipy.stats.binom.cdf(x, 20, 0.34)

	p = bokeh.plotting.figure(plot_height=250,
	                          plot_width=350,
	                          x_axis_label='n',
	                          y_axis_label='F(n; 20, 0.34)',
	                          title='Binomial CDF', tools="save")
	p.segment(x[:-1], y[:-1], x[1:], y[:-1], line_width=2)
	p.ray(0, 0, angle=np.pi, length=0, line_width=2)
	p.ray(x[-1], 1, angle=0, length=0, line_width=2)
	p.circle([0], [0], fill_color='white')
	p.circle(x[1:], y[:-1], fill_color='white')
	p.circle(x, y)
	p.background_fill_alpha = 0
	p.border_fill_alpha = 0


	bokeh.io.show(p)

However, since it is understood that the CDF is not multivalued, there should be no ambiguity in plotting the staircase, and indeed staircase style CDFs are commonly used. The staircase has less clutter and I find it is easier to look at and interpret. Furthemore, we know that all CDFs extend toward :math:`x=-\infty` with a value of zero and toward :math:`x=\infty` with a value of one. So, again, there is no ambiguity in cutting off the infinitely long tails of the CDF.


Parametrization
---------------

If a probability mass or density function depends on parameters, say :math:`N` and :math:`\theta`, we write it as :math:`f(x;N,\theta)`. There does not seem to be consensus on the best notation for this, and you may see this same quantity written as :math:`f(x\mid N, \theta)`, implying conditioning, for example.

Distributions may be parametrized in different ways. For example, we may parametrize a Normal distribution in terms of what is commonly called the standard deviation :math:`\sigma`, but we can also parametrize it by the precision :math:`\tau \equiv 1/\sigma`. The parametrizations I use in this app are those used in the `Stan <http://mc-stan.org/>`_ probabilistic programming language.


Location and scale parameters
-----------------------------

Some parameters of distributions have special properties. A **location** parameter shifts the PMF/PDF and CDF along the x-axis. A **scale** parameter serves to rescale the x-axis. As an example, the Normal distribution has PDF

.. math::

	\begin{align}
	f(x;\mu, \sigma) \propto \mathrm{e}^{-(x-\mu)^2/2\sigma^2},
	\end{align}

where I have omitted the normalization constant for clarity in the present discussion. The PDF reaches a maximum at :math:`x=\mu`. The parameter :math:`\mu` is a location parameter because I could define :math:`x' = x-\mu` and still get a Normal PDF in :math:`x'` with a maximum at :math:`x' = 0`.

The parameter :math:`\sigma` is a scale parameter because I could define :math:`x' = x/\sigma` and :math:`\mu' = \mu / \sigma`, and I get a new PDF,

.. math::

	\begin{align}
	f(x' ; \mu') \propto \mathrm{e}^{-(x'-\mu')^2/2}.
	\end{align}

This is as if I stretched the x-axis by a factor of :math:`\sigma`.

In this app, I will refer to :math:'\mu' not by its common name of "the mean," but instead as "the location parameter." This is because the word "mean" can have different meanings in different contexts, and using the term "location parameter" is unambiguous. Similarly, I will refer to :math:`\sigma` as the scale parameter and not the standard deviation. This is also consistent with the nomenclature in NumPy and SciPy.


Moments
-------

A **moment** of a distribution can be defined in terms of its probability density function or probability mass function. Before defining moments, it is best to first define the **expectation** of a function **g(x)** for a given distribution. For a continuous distribution with PDF :math:`f(x)`, this is

.. math::

	\begin{align}
	E(g(x)) = \int_{-\infty}^\infty \mathrm{d}x \, g(x) f(x).
	\end{align}

For a discrete distribution with PMF :math:`f(x)`, the expectation of :math:`g(x)` is

.. math::

	\begin{align}
	E(g(x)) = \sum_i  g(x_i) f(x_i).
	\end{align}

The nth moment of a distribution is :math:`E(x^n)`. The first moment of a distribution is called the **mean**, and here we will denote it at :math:`\mu`. We define the :math:`n`th **central moment** as :math:`E((x-\mu)^n)`.

Perhaps the two most important moments of a distribution are the first moment (the mean) and the second central moment, :math:`E((x-\mu)^n)`, which is called the **variance**. For each distribution I display its mean and variance, if they exist.


Useful data generation concepts
--------------------------------

In describing stories of distributions, the concepts of a **Bernoulli trial** and of a **Poisson process** are useful.

Bernoulli trial
^^^^^^^^^^^^^^^

A Bernoulli trial is an experiment that has two outcomes that can be encoded as success (:math:`y=1`) or failure (:math:`y = 0`). The words "success" and "failure" do not necessarily mean positive or negative outcomes as they appeal to human emotion. They are just names for the encodings of the outcomes.


Poisson process
^^^^^^^^^^^^^^^

Rare events occur with a rate :math:`\lambda` per unit time. There is no "memory" of previous events; i.e., that rate is independent of time. A process that generates such events is called a Poisson process. The occurrence of a rare event in this context is referred to as an *arrival*.


Multivariate distributions
--------------------------

So far, we have assumed **univariate distributions**, that is probability distributions of a single random variable. We may also consider **multivariate distributions**, which describe more than one random variable. For a distribution of :math:`n` random variables, we define the PMF or PDF as :math:`f(x_1, x_2, \ldots, x_n)`. For ease of discussion, we can consider the bivariate case describing random variables :math:`X` and :math:`Y` which may take on values :math:`x` and :math:`y`. In that case, the PMF or PDF is written as :math:`f(x, y)`. It is permissible that, e.g., :math:`x` is continuous and :math:`y` is discrete. The multivariate cumulative distribution function is given by :math:`F(x, y) = P(X \le x, Y \le y)`.

