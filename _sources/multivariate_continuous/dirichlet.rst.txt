.. _dirichlet:

Dirichlet distribution
======================


----


Story
-----

The Dirichlet distribution is a generalization of the :ref:`beta`. It is a probability distribution describing probabilities of outcomes. Instead of describing probability of one of two outcomes of a Bernoulli trial, like the Beta distribution does, it describes probability of :math:`K` outcomes. The :ref:`beta` is the special case of the Dirichlet distribution with :math:`K=2`.


----


Parameters
----------

The parameters are :math:`\alpha_1`, :math:`\alpha_2`, ..., :math:`\alpha_K`, all strictly positive, defined analogously to :math:`\alpha` and :math:`\beta` of the :ref:`beta`.

----


Support
-------

The Dirichlet distribution has support on the interval [0, 1] such that :math:`\sum_{i=1}^K \theta_i = 1`.

----


Probability density function
----------------------------

.. math::

	\begin{align}
	f(\boldsymbol{\theta};\boldsymbol{\alpha}) = \frac{1}{B(\boldsymbol{\alpha})}\,\prod_{i=1}^K \theta_i^{\alpha_i-1},
	\end{align}

where

.. math::

    \begin{align}
    B(\boldsymbol{\alpha}) = \frac{\prod_{i=1}^K\Gamma(\alpha_i)}{\Gamma\left(\sum_{i=1}^K \alpha_i\right)}
    \end{align}

is the `multivariate Beta function <https://en.wikipedia.org/wiki/Beta_function#Multivariate_beta_function>`_.

----

Moments
-------

Mean of :math:`\theta_i`: :math:`\left<\theta_i\right> = \displaystyle{\frac{\alpha_i}{\sum_{i=k}^K \alpha_k}}`

Variance of :math:`\theta_i`: :math:`\displaystyle{\frac{\left<\theta_i\right>(1-\left<\theta_i\right>)}{1 + \sum_{k=1}^K \alpha_k}}`

Covariance of :math:`\theta_i, \theta_j` with :math:`j\ne i`: :math:`\displaystyle{-\frac{\left<\theta_i\right>\left<\theta_j\right>}{1 + \sum_{k=1}^K \alpha_k}}`

----


Usage
-----

The usage below assumes that ``alpha`` is a length :math:`K` array.

+---------------------+---------------------------------------------------+
| Package             | Syntax                                            |
+=====================+===================================================+
| **NumPy**           | ``rg.dirichlet(alpha)``                           |
+---------------------+---------------------------------------------------+
| **SciPy**           | ``scipy.stats.dirichlet(alpha)``                  |
+---------------------+---------------------------------------------------+
| **Stan**            | ``dirichlet(alpha)``                              |
+---------------------+---------------------------------------------------+


----

Related distributions
---------------------

- The special case where :math:`K=2` is a :ref:`beta` with parameters :math:`\alpha=\alpha_1` and :math:`\beta = \alpha_2`.
- If we have :math:`K` random variables that have a :ref:`gamma`, :math:`X_i \sim \text{Gamma}(\alpha_i, \beta)`, then :math:`(X_1/V, X_2/V, \ldots, X_K/V) \sim \text{Dirichlet}(\boldsymbol{\alpha})` with :math:`\boldsymbol{\alpha} = (\alpha_1, \alpha_2, \ldots, \alpha_3)` and :math:`V = \sum_{i=1}^K X_i`. Note that the value of :math:`\beta` does not enter into the Dirichlet distribution. This relationship becomes important in modeling of ordered Dirichlet distribution, as described below.


----

Notes
-----

- In some cases, we may wish to specify the distribution of an *ordered* Dirichlet distributed vector :math:`\theta`. That is, we want :math:`\theta \sim \text{Dirichlet}(\alpha_1, \alpha_2, \ldots, \alpha_L)` with :math:`\theta_i < \theta_{i+1}` for all :math:`i < K`. Because of the relationship of the Dirchlet distribution to a set of Gamma distributed random variables, we may specify this in Stan as follows.

.. code:: stan

    data {
      int<lower=1> K;
    }

    parameters {
      vector<lower=0>[K] alpha;
      positive_ordered[K] lambda;
    }

    transformed parameters {
      simplex[K] theta = lambda / sum(lambda);
    }

    model {
      target += gamma_lpdf(lambda | alpha, 1);
    }

----

Links
-----

- `Wikipedia <https://en.wikipedia.org/wiki/Dirichlet_distribution>`_
- `Numpy <https://docs.scipy.org/doc/numpy/reference/random/generated/numpy.random.Generator.dirichlet.html>`_
- `Scipy <https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.dirichlet.html>`_
- `Stan <https://mc-stan.org/docs/2_21/functions-reference/dirichlet-distribution.html>`_
