.. _normal:

Normal distribution
===================


----


Story
-----

Any quantity that emerges as the sum of a large number of subprocesses tends to be Normally distributed provided none of the subprocesses is very broadly distributed.


----


Example
-------

We measure the length of many *C. elegans* eggs. The lengths are Normally distributed. Many biological measurements, like the height of people, are (approximately) Normally distributed. Many processes contribute to setting the length of an egg or the height of a person.


----

Parameters
----------

The Normal distribution has two parameters, the location parameter :math:`\mu`, which determines the location of its peak, and the scale parameter :math:`\sigma`, which is strictly positive (the :math:`\sigma \to 0` limit defines a `Dirac delta function <https://en.wikipedia.org/wiki/Dirac_delta_function>`_) and determines the width of the peak.

These parameters are commonly referred to as the mean and standard deviation, respectively. Those terms are widely used in other contexts, such as for point estimates of moments of an arbitrary distribution, so we avoid using those terms to avoid confusion.

----


Support
-------

The Normal distribution is supported on the set of real numbers.



----


Probability density function
----------------------------

.. math::

	\begin{align}
	f(y;\mu, \sigma) = \frac{1}{\sqrt{2\pi\sigma^2}}\,\mathrm{e}^{-(y-\mu)^2/2\sigma^2}.
	\end{align}

----


Moments
-------

Mean: :math:`\mu`

Variance: :math:`\sigma^2`


----


Usage
-----

+-----------------+----------------------------------+
| Package         | Syntax                           |
+=================+==================================+
| **NumPy**       | ``rg.normal(mu, sigma)``         |
+-----------------+----------------------------------+
| **SciPy**       | ``scipy.stats.norm(mu, sigma)``  |
+-----------------+----------------------------------+
| **Stan**        | ``normal(mu, sigma)``            |
+-----------------+----------------------------------+


----


Related distributions
---------------------

- The :ref:`binomial`, parametrized by :math:`N` and :math:`\theta` is approximated Normal with location parameter :math:`N\theta` and scale parameter :math:`\sqrt{N\theta(1-\theta)}` for large :math:`N` and :math:`\theta` not too close to zero or one. Although the :ref:`binomial` is discrete, for large :math:`N` we approximate it as continuous, allowing the Normal approximation.
- It follows that the :ref:`poisson` with parameter :math:`\lambda` is approximately normal with location parameter :math:`\lambda` and scale parameter :math:`\sqrt{\lambda}` for large :math:`\lambda`.
- The :ref:`student_t`, parametrized by location and scale parameters :math:`\mu` and :math:`\sigma`, respectively, and degrees of freedom :math:`\nu` becomes Normal (with the same location and scale parameters) in the limit of :math:`\nu\to\infty`.
- The :ref:`gamma`, parametrized by shape and inverse scale parameters :math:`\alpha` and :math:`\beta`, respectively, is approximately Normal with respective location and scale parameters :math:`\alpha/\beta` and :math:`\sqrt{\alpha}/\beta` in the limit of large :math:`\alpha`.
- Any univariate continuous distribution is approximately Normal very close to a peak. Imagine a distribution with a PDF given by :math:`f(y;\theta)`, where :math:`\theta` represents the set of parameters for the distribution. If we expand the log PDF to second order in a Taylor series about a point :math:`y^*` where the PDF is maximal, we get

.. math::

    \begin{align}
    \ln f(y;\theta) \approx \ln f(y^*;\theta) + \left.\frac{1}{2}\,\frac{\mathrm{d}^2 \ln f(y;\theta)}{\mathrm{d}y^2}\right|_{y=y^*}\,(y-y^*)^2.
    \end{align}

This is the log PDF that is that of a Normal distribution. The location parameter of the approximate Normal distribution is :math:`y^*` (the location of the peak) and the scale parameter is 

.. math::

    \begin{align}
    -\left(\left.\frac{\mathrm{d}^2 \ln f(y;\theta)}{\mathrm{d}y^2}\right|_{y=y^*}\right)^{-1/2}.
    \end{align}

Note, though, that this may be a very poor approximation as we move even a small distance from the peak.


----


Notes
-----

- The Normal distribution is often referred to as the Gaussian distribution, particularly in the physical sciences, named for one of its discoverers, `Carl Gauss <https://en.wikipedia.org/wiki/Carl_Friedrich_Gauss>`_.


----


PDF and CDF plots
-----------------

.. bokeh-plot::
    :source-position: none

    import bokeh.io
    import distribution_explorer

    bokeh.io.show(distribution_explorer.explore('normal', background_fill_alpha=0, border_fill_alpha=0))

----

Links
-----

- `Wikipedia <https://en.wikipedia.org/wiki/Normal_distribution>`_
- `Numpy <https://docs.scipy.org/doc/numpy/reference/random/generated/numpy.random.Generator.normal.html>`_
- `Scipy <https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.norm.html#scipy.stats.norm>`_
- `Stan <https://mc-stan.org/docs/2_21/functions-reference/normal-distribution.html>`_
