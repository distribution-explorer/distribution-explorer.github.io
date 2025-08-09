.. _discrete_uniform:

Discrete Uniform distribution
==============================

----


Story
-----

A set of discrete outcomes that can be indexed with sequential integers, and each outcome has equal probability, like rolling a fair die.


----


Example
-------

A monkey can choose from any of :math:`n` bananas with equal probability.


----


Parameters
----------

The distribution is parametrized by the high and low allowed values, respectively :math:`y_\mathrm{high}` and :math:`y_\mathrm{low}`.


----


Support
-------

The Discrete Uniform distribution is supported on the set of integers ranging from :math:`y_\mathrm{low}` to :math:`y_\mathrm{high}`, inclusive.


----


Probability mass function
-------------------------

.. math::

    \begin{align}
    f(y ; y_\mathrm{low}, y_\mathrm{high}) = \frac{1}{y_\mathrm{high} - y_\mathrm{low} + 1}
    \end{align}


----


Cumulative distribution function
--------------------------------

The CDF evaluated at integer :math:`y` is

.. math::

    \begin{align}
    F(y ; y_\mathrm{low}, y_\mathrm{high}) = \frac{y - y_\mathrm{low} + 1}{y_\mathrm{high} - y_\mathrm{low} + 1}
    \end{align}


----


Moments
-------

Mean: :math:`\displaystyle{\frac{y_\mathrm{low} + y_\mathrm{high}}{2}}`

Variance: :math:`\displaystyle{\frac{(y_\mathrm{high} - y_\mathrm{low} + 1)^2 - 1}{12}}`


----


Usage
-----

+----------------------+-----------------------------------------------------------------------+
| Package              | Syntax                                                                |
+======================+=======================================================================+
| **NumPy**            | ``rng.integers(low, high + 1)``                                       |
+----------------------+-----------------------------------------------------------------------+
| **SciPy**            | ``scipy.stats.randint(low, high + 1)``                                |
+----------------------+-----------------------------------------------------------------------+
| **Distributions.jl** | ``DiscreteUniform(low, high)``                                        |
+----------------------+-----------------------------------------------------------------------+
| **Stan**             | ``categorical(theta)``, ``theta`` array with all equal values         |
+----------------------+-----------------------------------------------------------------------+


----


Related distributions
---------------------

- The Discrete Uniform distribution is a special case of the :ref:`categorical` where all :math:`\theta_y` are equal.


----

Notes
-----

- This distribution is not included in Stan. Instead, use a :ref:`categorical` with equal probabilities.
- In SciPy, this distribution is known as ``scipy.stats.randint``. The high parameter is not inclusive; i.e., the set of allowed values includes the low parameter, but not the high. The same is true for ``rng.integers()``, unless you use the ``endpoint=True`` keyword argument, in which case the high parameter is inclusive.

----


PMF and CDF plots
-----------------

.. bokeh-plot::
    :source-position: none

    import bokeh.io
    import distribution_explorer

    bokeh.io.show(distribution_explorer.explore('discrete_uniform', background_fill_alpha=0, border_fill_alpha=0))

----

Links
-----

- `Wikipedia <https://en.wikipedia.org/wiki/Discrete_uniform_distribution>`_
- `Numpy <https://docs.scipy.org/doc/numpy/reference/random/generated/numpy.random.Generator.integers.html>`_
- `Scipy <https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.rv_discrete.html>`_
- `Distributions.jl <https://juliastats.org/Distributions.jl/stable/univariate/#Distributions.DiscreteUniform>`_
- `Stan <https://mc-stan.org/docs/functions-reference/categorical-distribution.html>`_