.. _lognormal:

Log-Normal distribution
===================


----


Story
-----

If :math:`\ln y` is Normally distributed, then :math:`y` is Log-Normally distributed.


----


Example
-------

A measure of fold change in gene expression can be Log-Normally distributed.


----

Parameters
----------

As for the :ref:`normal`, there are two parameters, the location parameter :math:`\mu` and the scale parameter :math:`\sigma`. Note that :math:`\mu` is the mean of :math:`\ln y`, not of :math:`y` itself. That is, :math:`\langle\ln y\rangle_{\mathrm{LogNorm}} = \mu`. Similarly, :math:`\langle(\ln y - \mu)^2\rangle_{\mathrm{LogNorm}} = \sigma^2`.

----


Support
-------

The Log-Normal distribution is supported on the set of positive real numbers.



----


Probability density function
----------------------------

.. math::

	\begin{align}
	f(y;\mu, \sigma) = \frac{1}{y\sqrt{2\pi\sigma^2}}\,\mathrm{e}^{-(\ln y-\mu)^2/2\sigma^2}.
	\end{align}

----


Cumulative distribution function
--------------------------------

.. math::

    \begin{align}
    F(y;\mu, \sigma) =\frac{1}{2}\left(1 + \text{erf}\left(\frac{\ln y - \mu}{\sigma\sqrt{2}}\right)\right),
    \end{align}

where :math:`\text{erf}(x)` denotes the :ref:`error function <Error function>`.

----

Moments
-------

Mean: :math:`\displaystyle{\mathrm{e}^{\mu + \sigma^2/2}}`

Variance: :math:`\left(\mathrm{e}^{\sigma^2} - 1\right)\mathrm{e}^{2\mu + \sigma^2}`


----


Usage
-----

+----------------------+----------------------------------------------------------+
| Package              | Syntax                                                   |
+======================+==========================================================+
| **NumPy**            | ``rng.lognormal(mu, sigma)``                             |
+----------------------+----------------------------------------------------------+
| **SciPy**            | ``scipy.stats.lognorm(sigma, loc=0, scale=np.exp(mu))``  |
+----------------------+----------------------------------------------------------+
| **Distributions.jl** | ``LogNormal(mu, sigma)``                                 |
+----------------------+----------------------------------------------------------+
| **Stan**             | ``lognormal(mu, sigma)``                                 |
+----------------------+----------------------------------------------------------+

----


Related distributions
---------------------

- The Log-Normal is related to the :ref:`normal` through its story.

----


Notes
-----

- Be careful not to get confused. The Log-Normal distribution describes the distribution of :math:`y` given that :math:`\ln y` is Normally distributed. It does not describe the distribution of :math:`\ln y`.
- The way location, scale, and shape parameters work in SciPy for the Log-Normal distribution is confusing. If you want to specify a Log-Normal distribution as we have defined it using ``scipy.stats``, use a shape parameter equal to :math:`\sigma`, a location parameter of zero, and a scale parameter given by :math:`\mathrm{e}^\mu`. For example, to compute the PDF, you would use ``scipy.stats.lognorm.pdf(y, sigma, loc=0, scale=np.exp(mu))``.


----


PDF and CDF plots
-----------------

.. bokeh-plot::
    :source-position: none

    import bokeh.io
    import distribution_explorer

    bokeh.io.show(distribution_explorer.explore('lognormal', background_fill_alpha=0, border_fill_alpha=0))

----

Links
-----

- `Wikipedia <https://en.wikipedia.org/wiki/Log-normal_distribution>`_
- `Numpy <https://docs.scipy.org/doc/numpy/reference/random/generated/numpy.random.Generator.lognormal.html>`_
- `Scipy <https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.lognorm.html>`_
- `Distributions.jl <https://juliastats.org/Distributions.jl/stable/univariate/#Distributions.LogNormal>`_
- `Stan <https://mc-stan.org/docs/functions-reference/lognormal.html>`_
