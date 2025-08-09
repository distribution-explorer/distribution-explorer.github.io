.. _categorical:

Categorical distribution
==============================


----


Story
-----

A probability is assigned to each of a set of discrete unordered outcomes.


----


Example
-------

A hen will peck at grain A with probability :math:`\theta_\mathrm{A}`, grain B with probability :math:`\theta_\mathrm{B}`, and grain C with probability :math:`\theta_\mathrm{C}`.


----


Parameters
----------

The distribution is parametrized by the probabilities assigned to each event. We define :math:`\theta_y` to be the probability assigned to outcome :math:`y`. The set of :math:`\theta_y`'s are the parameters, and are constrained by

.. math::

    \begin{align}
    \sum_y \theta_y = 1.
    \end{align}


----


Support
-------

If we index the categories with sequential integers from 1 to *N*, the distribution is supported for integers 1 to *N*, inclusive when described using the indices of the categories.


----


Probability mass function
-------------------------

.. math::

    \begin{align}
    f(y;\{\theta_y\}) = \theta_y
    \end{align}


----


Cumulative distribution function
--------------------------------

If we choose to impose an order on the categories, we can define a CDF. Here, we denote the index by :math:`y`.

.. math::

    \begin{align}
    F(y;\{\theta_y\}) = \sum_{y'\le y} \theta_{y'}.
    \end{align}



----


Moments
-------

Moments are not defined for a Categorical distribution because the value of :math:`y` is not necessarily numeric.


----


Usage
-----

+----------------------+-----------------------------------------------------------------------+
| Package              | Syntax                                                                |
+======================+=======================================================================+
| **NumPy**            | ``rng.choice(len(theta), p=theta)``                                   |
+----------------------+-----------------------------------------------------------------------+
| **SciPy**            | ``scipy.stats.rv_discrete(values=(range(len(theta)), theta))``        |
+----------------------+-----------------------------------------------------------------------+
| **Distributions.jl** | ``Categorical(theta)``                                                |
+----------------------+-----------------------------------------------------------------------+
| **Stan**             | ``categorical(theta)``                                                |
+----------------------+-----------------------------------------------------------------------+

----


Related distributions
---------------------

- The :ref:`discrete_uniform` is a special case where all :math:`\theta_y` are equal.
- The :ref:`bernoulli` is a special case where there are two categories that can be encoded as having outcomes of zero or one. In this case, the parameter for the Bernoulli distribution is :math:`\theta = \theta_1 = 1 - \theta_2`.


----


Notes
-----

- This distribution must be manually constructed if you are using the ``scipy.stats`` module using ``scipy.stats.rv_discrete()``. The categories need to be encoded by an index. For interactive plotting purposes, below, we need to specify a custom PMF and CDF.
- To sample out of a Categorical distribution, use ``rng.choice()``, specifying the values of :math:`\theta` using the `p` kwarg.


----


PMF and CDF plots
-----------------

In the plot below, there are four categories, but we can only specify the probability for three of the four categories because the probability of the fourth is set by the normalization condition. If the parameters are such that the probabilities of the respective categories exceed one, the PMF is not displayed.

.. bokeh-plot::
    :source-position: none

    import bokeh.io
    import distribution_explorer

    bokeh.io.show(distribution_explorer.explore('categorical', background_fill_alpha=0, border_fill_alpha=0))


----


Links
-----

- `Wikipedia <https://en.wikipedia.org/wiki/Categorical_distribution>`_
- `Numpy <https://docs.scipy.org/doc/numpy/reference/random/generated/numpy.random.Generator.choice.html>`_
- `Scipy <https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.rv_discrete.html>`_
- `Distributions.jl <https://juliastats.org/Distributions.jl/stable/univariate/#Distributions.Categorical>`_
- `Stan <https://mc-stan.org/docs/functions-reference/categorical-distribution.html>`_