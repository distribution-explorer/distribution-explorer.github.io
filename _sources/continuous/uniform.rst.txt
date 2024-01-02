.. _uniform:

Uniform distribution
====================


----


Story
-----

Outcomes are restricted to a given continuous range and every outcome in that range has equal probability.


----


Example
-------

Anything in which all possibilities are equally likely. This is, perhaps surprisingly, rarely encountered.


----

Parameters
----------

The Uniform distribution is not defined on an infinite or semi-infinite domain, so finite lower and upper bounds, :math:`\alpha` and :math:`\beta`, respectively, are necessary parameters.

----


Support
-------

The Uniform distribution is supported on the interval :math:`[\alpha, \beta]`.



----


Probability density function
----------------------------

.. math::

	\begin{align}
	f(y;\alpha, \beta) = \left\{\begin{array}{ccl}\displaystyle{\frac{1}{\beta-\alpha}}&&\alpha\le y\le\beta\\[0.5em] 0 && \text{otherwise.}\end{array}\right.
	\end{align}


----

Cumulative distribution function
--------------------------------

.. math::

    \begin{align}
    F(y; \alpha, \beta) = \left\{\begin{array}{ccl} 0 && y < a \\[0.5em]\displaystyle{\frac{y-\alpha}{\beta-\alpha}}&&\alpha\le y\le\beta\\[0.5em] 1 && y > \beta\end{array}\right.
    \end{align}


----


Moments
-------

Mean: :math:`\displaystyle{\frac{\alpha + \beta}{2}}`

Variance: :math:`\displaystyle{\frac{(\beta - \alpha)^2}{12}}`


----

Usage
-----

+----------------------+-----------------------------------------------+
| Package              | Syntax                                        |
+======================+===============================================+
| **NumPy**            | ``rng.uniform(alpha, beta)``                  |
+----------------------+-----------------------------------------------+
| **SciPy**            | ``scipy.stats.uniform(alpha, beta - alpha)``  |
+----------------------+-----------------------------------------------+
| **Distributions.jl** | ``Uniform(alpha, beta)``                      |
+----------------------+-----------------------------------------------+
| **Stan**             | ``uniform(alpha, beta)``                      |
+----------------------+-----------------------------------------------+

----

Related distributions
---------------------

- The Uniform distribution on the interval [0, 1] (i.e., :math:`\alpha=0` and :math:`\beta=1`) is a special case of the :ref:`beta` where the parameters for the Beta distribution are :math:`\alpha=\beta=1` (not to be confused with the :math:`\alpha` and :math:`\beta` used to parametrize the Uniform distribution).


----


PDF and CDF plots
-----------------

.. bokeh-plot::
    :source-position: none

    import bokeh.io
    import distribution_explorer

    bokeh.io.show(distribution_explorer.explore('uniform', background_fill_alpha=0, border_fill_alpha=0))

----

Links
-----

- `Wikipedia <https://en.wikipedia.org/wiki/Uniform_distribution_(continuous)>`_
- `Numpy <https://docs.scipy.org/doc/numpy/reference/random/generated/numpy.random.Generator.uniform.html>`_
- `Scipy <https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.uniform.html#scipy.stats.uniform>`_
- `Distributions.jl <https://juliastats.org/Distributions.jl/stable/univariate/#Distributions.Uniform>`_
- `Stan <https://mc-stan.org/docs/functions-reference/uniform-distribution.html>`_
