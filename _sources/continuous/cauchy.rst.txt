.. _cauchy:

Cauchy distribution
===================


----


Story
-----

The intercept on the x-axis of a beam of light coming from the point :math:`(\mu, \sigma)` is Cauchy distributed. This story is popular in physics, but is not particularly useful. You can think of it as a peaked distribution with enormously heavy tails.


----

Parameters
----------

The Cauchy distribution is peaked, and its peak is located at :math:`\mu`, its location parameter, which may take on any real value. The peak's width is dictated by a positive scale parameter :math:`\sigma`.

----


Support
-------

The Cauchy distribution is supported on the set of real numbers.



----


Probability density function
----------------------------

.. math::

	\begin{align}
	f(y;\mu,\sigma) = \frac{1}{\pi \sigma}\,\frac{1}{1 + (y-\mu)^2/\sigma^2}.
	\end{align}

----


Cumulative distribution function
--------------------------------

.. math::

    \begin{align}
    F(y;\mu,\sigma) = \frac{1}{2} + \frac{1}{\pi}\,\arctan\left(\frac{y - \mu}{\sigma}\right).
    \end{align}

----



Moments
-------

Mean: Undefined

Variance: Undefined


----


Usage
-----

+----------------------+----------------------------------------+
| Package              | Syntax                                 |
+======================+========================================+
| **NumPy**            | ``mu + sigma * rng.standard_cauchy()`` |
+----------------------+----------------------------------------+
| **SciPy**            | ``scipy.stats.cauchy(mu, sigma)``      |
+----------------------+----------------------------------------+
| **Distributions.jl** | ``Cauchy(mu, sigma) ``                 |
+----------------------+----------------------------------------+
| **Stan**             | ``cauchy(mu, sigma)``                  |
+----------------------+----------------------------------------+


----


Related distributions
---------------------

- The Cauchy distribution is a special case of the :ref:`student_t` in which the degrees of freedom :math:`\nu = 1`.

----


Notes
-----

- The ``numpy.random`` module only has the Standard Cauchy distribution (:math:`\mu=0` and :math:`\sigma=1`), but you can draw out of a Cauchy distribution using the transformation shown in the NumPy usage above.
- The Cauchy distribution has extremely heavy tails, so heavy that no moments are defined.


----


PDF and CDF plots
-----------------

.. bokeh-plot::
    :source-position: none

    import bokeh.io
    import distribution_explorer

    bokeh.io.show(distribution_explorer.explore('cauchy', background_fill_alpha=0, border_fill_alpha=0))

----

Links
-----

- `Wikipedia <https://en.wikipedia.org/wiki/Cauchy_distribution>`_
- `Numpy <https://docs.scipy.org/doc/numpy/reference/random/generated/numpy.random.Generator.standard_cauchy.html>`_
- `Scipy <https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.cauchy.html>`_
- `Distributions.jl <https://juliastats.org/Distributions.jl/stable/univariate/#Distributions.Cauchy>`_
- `Stan <https://mc-stan.org/docs/functions-reference/cauchy-distribution.html>`_
