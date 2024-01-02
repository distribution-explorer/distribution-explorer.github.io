.. _vonmises:

Von Mises distribution
======================


----


Story
-----

A particle diffuses along a circle in a harmonic potential for a given amount of time. Its angular position along the circle is Von Mises distributed.

It is perhaps easier to think of the Von Mises distribution as an approximation to Normal distribution that lives on a periodic domain.


----


Example
-------

A steady wind blows on a weather vane with occasional variations in direction. The angle from north to which the vane points can be modeled as Von Mises distributed.


----

Parameters
----------

The Von Mises distribution has two parameters, the location parameter :math:`\mu`, which determines the location of its peak, and the shape parameter :math:`\kappa`, which is strictly positive and determines the width of the peak. The larger :math:`\kappa` is, the narrower the peak.

Because the Von Mises distribution is defined in a periodic domain, its random variable must be restricted to live on an interval of length :math:`2\pi` in order to be normalizable. The value of :math:`\mu` must therefore also be restricted to lie on the same interval. Common conventions include :math:`[0, 2\pi)` and :math:`[-\pi, \pi)`, and we will employ the latter.


----


Support
-------

The Von Mises distribution is supported on any set of real numbers on an interval :math:`[a - \pi, a + \pi)`, where :math:`a` is any real number. Here, we specify :math:`a=0` such that the support is :math:`[-\pi, pi)`.



----


Probability density function
----------------------------

.. math::

	\begin{align}
	f(y;\mu, \kappa) = \frac{\mathrm{e}^{-\kappa\cos(y-\mu)}}{2\pi I_0(\kappa)},
	\end{align}

where :math:`I_0(\kappa)` is the :ref:`modified Bessel function of the first kind of order zero <Modified Bessel function of the first kind>`.

----


Cumulative distribution function
--------------------------------

The CDF for the Von Mises distribution can only be properly defined if we first specify a finite domain of length :math:`2\pi` on which the distribution lives. There is no analytical expression for it, and it is typically evaluated numerically. On the interval :math:`[-\pi, \pi)`, the CDF is

.. math::

    \begin{align}
    F(y;\mu, \kappa) = \int_{-\pi}^y\mathrm{d}x\,f(x;\mu,\kappa) = \frac{1}{2\pi I_0(\kappa)}\,\int_{-\pi}^y\mathrm{d}x\,\mathrm{e}^{-\kappa\cos(y-\mu)}.
    \end{align}

----


Moments
-------

By convention, moments of distributions defined on periodic domains are usually calculated as the moments of the complex exponential of the the angle :math:`y` instead of the angle itself. There are referred to as **circular moments**. The circular mean is

.. math::

    \begin{align}
    \langle \mathrm{e}^{i y}\rangle = \int_{-\pi}^\pi\mathrm{d}y\,\mathrm{e}^{iy}\,f(y;\mu, \kappa).
    \end{align}

Evaluating this integral gives a circular mean of

.. math::

    \begin{align}
    \text{circular mean} = \frac{I_1(\kappa)}{I_0(\kappa)}\,\mathrm{e}^{i\mu}.
    \end{align}

Perhaps confusingly, traditionally the "mean" of a distribution on a circular domain refers to the argument of the exponential, in this case :math:`\mu`. The circular variance can also be evaluated and is is traditionally reported as the variance.

Mean: :math:`\mu`

Circular variance: :math:`1 - \frac{I_1(\kappa)}{I_0(\kappa)}`


----


Usage
-----

+-------------------------------------+----------------------------------------------+
| Package                             | Syntax                                       |
+=====================================+==============================================+
| **NumPy**                           | ``rng.vonmises(mu, kappa)``                  |
+-------------------------------------+----------------------------------------------+
| **SciPy**                           | ``scipy.stats.vonmises(kappa, loc=mu)``      |
+-------------------------------------+----------------------------------------------+
| **SciPy (strictly -π ≤ y < π)**     | ``scipy.stats.vonmises_line(kappa, loc=mu)`` |
+-------------------------------------+----------------------------------------------+
| **Distributions.jl**                | ``VonMises(mu, kappa)``                      |
+-------------------------------------+----------------------------------------------+
| **Stan**                            | ``von_mises(mu, kappa)``                     |
+-------------------------------------+----------------------------------------------+

----


Related distributions
---------------------

- In the limit of large :math:`\kappa`, the Von Mises distribution approximates a :ref:`normal` with variance :math:`\sigma^2 = 1/\kappa`.


----


Notes
-----

- NumPy assumes an interval for :math:`y` of :math:`[-\pi, \pi)`. If the location parameter is specified as :math:`\mu`, as in a function call ``rng.vonmises(mu, kappa)``, the inputted :math:`\mu` is transformed to lie in the domain as

.. math::

    \begin{align}
    \mu \leftarrow \text{sign}(\mu)\left(\text{mod}(|\mu| + \pi, 2\pi) - \pi\right).
    \end{align}


The resulting random numbers then all lie in the interval :math:`[-\pi, \pi)`.

- SciPy's ``scipy.stats.vonmises`` considers the PDF to be periodic, giving the same value of the PDF at :math:`y` and :math:`y + 2n\pi` for any integer :math:`n`. Furthermore the CDF computed with ``scipy.stats.vonmises`` returns negative values for values of :math:`y` to the left of the domain and values greater than one for values to the right.
- SciPy offers ``scipy.stats.vonmises_line``, in which the interval on which the distribution is defined is :math:`[\mu - \pi, \mu + \pi)`. The PDF evaluates to zero outside of that domain, and the CDF evaluates to zero to the left of the domain and evaluates to one to the right. Sampling from the Von Mises distribution using ``st.vonmises_line.rvs()`` performs as NumPy's sampling with the transformation of the location parameter and all samples lying in the interval :math:`[-\pi, \pi)`.
- In the Distributions.jl, the interval on which the distribution is defined is :math:`[\mu - \pi, \mu + \pi)`, like ``scipy.stats.vonmises_line``, with the PDF and CDF being evaluated similarly. By contrast, sampling from the Von Mises distribution using Distributions.jl returns values in the domain :math:`[\mu - \pi, \mu + \pi)`; there is no transformation of the location parameter.
- Stan considers the PDF to be periodic such that it will use the same result for the (log) PDF for :math:`y` and :math:`y + 2n\pi` for any integer :math:`n`. However, it only defines the CDF on the interval :math:`[-\pi, \pi)`, applying the same transformation to the location parameter as NumPy, shown above. Similarly, when sampling, the location parameter :math:`\mu` lies in the interval :math:`[-\pi, \pi)`.
- In the context of Markov chain Monte Carlo, evaluation of the Von Mises (log) PDF and CDF for large :math:`\kappa` can be numerically unstable. NumPy and SciPy both automatically use Normal approximations in this regime (invisible to the user). Stan, however, does not. The Stan documentation therefore recommends doing that manually, adopting the following sampling statement.

.. code::

    if (kappa < 100) y ~ von_mises(mu, kappa);
    else y ~ normal(mu, sqrt(1 / kappa));


----


PDF and CDF plots
-----------------

Not all value-quantile pairs are achievable, and quantile setting may fail in some cases.

.. bokeh-plot::
    :source-position: none

    import bokeh.io
    import distribution_explorer

    bokeh.io.show(distribution_explorer.explore('normal', background_fill_alpha=0, border_fill_alpha=0))

----

Links
-----

- `Wikipedia <https://en.wikipedia.org/wiki/Von_Mises_distribution>`_
- `Numpy <https://numpy.org/doc/stable/reference/random/generated/numpy.random.Generator.vonmises.html>`_
- `Scipy <https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.vonmises.html>`_
- `Distributions.jl <https://juliastats.org/Distributions.jl/stable/univariate/#Continuous-Distributions>`_
- `Stan <https://mc-stan.org/docs/functions-reference/von-mises-distribution.html>`_
