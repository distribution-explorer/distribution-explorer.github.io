.. _exponential:

Exponential distribution
========================


----


Story
-----

Rare events occur with a rate :math:`\beta` per unit time. There is no "memory" of previous events; i.e., that rate is independent of time. A process that generates such events is called a *Poisson process*. The occurrence of a rare event in this context is referred to as an arrival. The inter-arrival time of a Poisson process is Exponentially distributed.


----


Example
-------

The time between conformational switches in a protein is Exponentially distributed (under simple mass action kinetics).


----

Parameters
----------

The single parameter is the positive arrival rate, :math:`\beta`. It is an inverse scale parameter.

----


Support
-------

The Exponential distribution is supported on the set of nonnegative real numbers.



----

Probability density function
----------------------------

.. math::

	\begin{align}
	f(y;\beta) = \beta \,\mathrm{e}^{-\beta y}.
	\end{align}


----

Cumulative distribution function
--------------------------------

.. math::

    \begin{align}
    F(y; \beta) = 1 - \mathrm{e}^{-\beta y}.
    \end{align}


----

Moments
-------

Mean: :math:`\displaystyle{\frac{1}{\beta}}`

Variance: :math:`\displaystyle{\frac{1}{\beta^2}}`


----

Usage
-----

+-----------------------+---------------------------------------------+
| Package               | Syntax                                      |
+=======================+=============================================+
| **NumPy**             | ``rng.exponential(1/beta)``                 |
+-----------------------+---------------------------------------------+
| **SciPy**             | ``scipy.stats.expon(loc=0, scale=1/beta)``  |
+-----------------------+---------------------------------------------+
| **Distributions.jl**  | ``Exponential(1/beta)``                     |
+-----------------------+---------------------------------------------+
| **Stan**              | ``exponential(beta)``                       |
+-----------------------+---------------------------------------------+

----


Related distributions
---------------------

- The Exponential distribution is the continuous analog of the :ref:`geometric`. The "rate" in the Exponential distribution is analogous to the probability of success of the Bernoulli trial in the Geometric distribution.
- The Exponential distribution is a special case of the :ref:`gamma` with parameter :math:`\alpha = 1`.
- The Exponential distribution is a special case of the :ref:`weibull` with parameter :math:`\alpha = 1`.

----


Notes
-----

- Alternatively, we could parametrize the Exponential distribution in terms of an average time between arrivals of a Poisson process, :math:`\tau`, as

.. math::

    \begin{align}
    f(y;\tau) = \frac{1}{\tau}\,\mathrm{e}^{-y/\tau}.
    \end{align}

----


PDF and CDF plots
-----------------

.. bokeh-plot::
    :source-position: none

    import bokeh.io
    import distribution_explorer

    bokeh.io.show(distribution_explorer.explore('exponential', background_fill_alpha=0, border_fill_alpha=0))

----

Links
-----

- `Wikipedia <https://en.wikipedia.org/wiki/Exponential_distribution>`_
- `Numpy <https://docs.scipy.org/doc/numpy/reference/random/generated/numpy.random.Generator.exponential.html>`_
- `Scipy <https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.expon.html>`_
- `Distributions.jl <https://juliastats.org/Distributions.jl/stable/univariate/#Distributions.Exponential>`_
- `Stan <https://mc-stan.org/docs/functions-reference/exponential-distribution.html>`_
