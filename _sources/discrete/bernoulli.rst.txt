.. _bernoulli:

Bernoulli distribution
======================


----


Story
-----

The result :math:`y` of a single Bernoulli trial is Bernoulli distributed.


----


Example 
-------

Check to see if a given bacterium is competent, given that it has probability :math:`\theta` of being competent.


----


Parameter 
---------

The Bernoulli distribution is parametrized by a
single value, :math:`\theta`, the probability that the trial is successful.


----


Support
-------
The Bernoulli distribution may be nonzero only for :math:`y = 0` and :math:`y = 1`.


----


Probability mass function
-------------------------

.. math::
	\begin{align}
	f(y;\theta) = \left\{ \begin{array}{ccc}
	1-\theta & & y = 0 \\[0.5em]
	\theta & & y = 1.
	\end{array}
	\right.
	\end{align}


----

Moments
-------

Mean: :math:`\theta`
 
Variance: :math:`\theta(1-\theta)`


----


Usage
-----

+-----------------+--------------------------------------------------+
| Package         | Syntax                                           |
+=================+==================================================+
| **NumPy**       | ``rg.choice([0, 1], p=[1-theta, theta])``        |
+-----------------+--------------------------------------------------+
| **SciPy**       | ``scipy.stats.bernoulli(theta)``                 |
+-----------------+--------------------------------------------------+
| **Stan**        | ``bernoulli(theta)``                             |
+-----------------+--------------------------------------------------+


----


Related distributions
---------------------

- The Bernoulli distribution is a special case of the :ref:`binomial` with :math:`N=1`.


----


PMF and CDF plots
-----------------

.. bokeh-plot::
    :source-position: none

    import bokeh.io
    import distribution_explorer

    bokeh.io.show(distribution_explorer.explore('bernoulli'))

----

Links
-----

- `Wikipedia <https://en.wikipedia.org/wiki/Bernoulli_distribution>`_
- `Numpy <https://docs.scipy.org/doc/numpy/reference/random/generated/numpy.random.Generator.choice.html>`_
- `Scipy <https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.bernoulli.html>`_
- `Stan <https://mc-stan.org/docs/2_21/functions-reference/bernoulli-distribution.html>`_

