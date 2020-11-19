.. _geometric:

Geometric distribution
======================


----


Story
-----

We perform a series of Bernoulli trials with probability of success :math:`\theta` until we get a success. The number of failures :math:`y` before the success is Geometrically distributed.

----


Example
-------

Consider polymerization of an actin filament. At each time step, an actin monomer may add to the end of the filament ("failure"), or an actin monomer may fall off the end ("success") with (usually very low) probability :math:`\theta`. The length of actin filaments, measured in number of constitutive monomers, is Geometrically distributed.

----

Parameters
----------

The Geometric distribution is parametrized by a single value, :math:`\theta`, the probability that the Bernoulli trial is successful.

----


Support
-------

The Geometric distribution, as defined here, has support on the nonnegative integers.


----


Probability mass function
-------------------------

.. math::

    \begin{align}
    f(y;\theta) = (1-\theta)^y \, \theta.
    \end{align}


----


Moments
-------

Mean: :math:`\displaystyle{\frac{1-\theta}{\theta}}`
 
Variance: :math:`\displaystyle{\frac{1-\theta}{\theta^2}}`


----


Usage
-----

+-----------------+--------------------------------------+
| Package         | Syntax                               |
+=================+======================================+
| **NumPy**       | ``rg.geometric(theta) - 1``          |
+-----------------+--------------------------------------+
| **SciPy**       | ``scipy.stats.geom(theta, loc=-1)``  |
+-----------------+--------------------------------------+
| **Stan**        | ``neg_binomial(1, theta/(1-theta))`` |
+-----------------+--------------------------------------+


----

Related distributions
---------------------

- The Geometric distribution is a special case of the :ref:`negative_binomial` in which :math:`\alpha=1` and :math:`\theta = \beta/(1+\beta)`.
- The continuous analog of the Geometric distribution is the :ref:`exponential`. 


----


Notes
-----

- The Geometric distribution is not implemented in Stan. You can instead use a :ref:`negative_binomial` fixing the parameter :math:`\alpha` to be unity and relating the parameter :math:`\beta` of the Negative Binomial distribution to :math:`\theta` as :math:`\theta = \beta/(1+\beta)`.
- The Geometric distribution is defined differently in Numpy and SciPy, replacing :math:`y` with :math:`y-1`. In this parametrization the Geometric distribution describes the number of successive Bernoulli *trials* (not just the failures; the success is included) necessary to get a success. To adjust for this while still using the PMF defined here, we use the ``loc=-1`` keyword argument in the SciPy implementation and we subtract one from the random numbers generated using Numpy.

----

PMF and CDF plots
-----------------

.. bokeh-plot::
    :source-position: none

    import bokeh.io
    import distribution_explorer

    bokeh.io.show(distribution_explorer.explore('geometric', background_fill_alpha=0, border_fill_alpha=0))

----

Links
-----

- `Wikipedia <https://en.wikipedia.org/wiki/Geometric_distribution>`_
- `Numpy <https://docs.scipy.org/doc/numpy/reference/random/generated/numpy.random.Generator.geometric.html>`_
- `Scipy <https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.geom.html>`_
- `Stan <https://mc-stan.org/docs/2_21/functions-reference/negative-binomial-distribution.html>`_ (Negative Binomial, from which Geometric may be generated)
