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

The single parameter is the average arrival rate, :math:`\beta`.

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

Moments
-------

Mean: :math:`\displaystyle{\frac{1}{\beta}}`

Variance: :math:`\displaystyle{\frac{1}{\beta^2}}`


----

Usage
-----

+-----------------+---------------------------------------------+
| Package         | Syntax                                      |
+=================+=============================================+
| **NumPy**       | ``rg.exponential(1/beta)``                  |
+-----------------+---------------------------------------------+
| **SciPy**       | ``scipy.stats.expon(loc=0, scale=1/beta)``  |
+-----------------+---------------------------------------------+
| **Stan**        | ``exponential(beta)``                       |
+-----------------+---------------------------------------------+


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

- The implementation in the ``scipy.stats`` module also has a location parameter, which shifts the distribution left and right. For our purposes, you can ignore that parameter, but be aware that ``scipy.stats`` requires it. Furthermore, the ``scipy.stats`` Exponential distribution is parametrized in terms of the interarrival time :math:`\tau` and not the arrival rate :math:`\beta`.
- NumPy's ``rg.exponential()`` function does not need nor accept a location parameter. It is also parametrized in terms of :math:`\tau`.

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
- `Stan <https://mc-stan.org/docs/2_21/functions-reference/exponential-distribution.html>`_
