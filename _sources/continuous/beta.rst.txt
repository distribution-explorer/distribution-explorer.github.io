.. _beta:

Beta distribution
=================


----


Story
-----

Say you wait for two multistep Poisson processes to arive. The individual steps of each process happen at the same rate, but the first multistep process requires :math:`\alpha` steps and the second requires :math:`\beta` steps. The fraction of the total waiting time taken by the first process is Beta distributed.

----


Parameters
----------

There are two shape parameters, both strictly positive: :math:`\alpha` and :math:`\beta`, defined in the above story.

----


Support
-------

The Beta distribution has support on the interval [0, 1].



----


Probability density function
----------------------------

.. math::

	\begin{align}
	f(\theta; \alpha, \beta) = \frac{\theta^{\alpha-1}(1-\theta)^{\beta-1}}{B(\alpha, \beta)},
	\end{align}

where :math:`B(\alpha, \beta)` is the :ref:`beta function <Beta function>`.


----


Cumulative distribution function
--------------------------------

.. math::

    \begin{align}
    F(\theta; \alpha, \beta) = I_\theta(\alpha, \beta) = \frac{1}{B(\alpha, \beta)}\,\int_0^\theta \mathrm{d}x\,x^{\alpha-1}(1-x)^{\beta-1},
    \end{align}

where :math:`I_\theta(\alpha, \beta)` is the :ref:`regularized incomplete beta function <Regularized incomplete beta function>`.


----


Moments
-------

Mean: :math:`\displaystyle{\frac{\alpha}{\alpha + \beta}}`

Variance: :math:`\displaystyle{\frac{\alpha\beta}{(\alpha + \beta)^2(\alpha + \beta + 1)}}`


----


Usage
-----

+-------------------------------------------------+----------------------------------------------------+
| Package                                         | Syntax                                             |
+=================================================+====================================================+
| **NumPy**                                       | ``rng.beta(alpha, beta)``                          |
+-------------------------------------------------+----------------------------------------------------+
| **NumPy with (φ, κ) parametrizaton**            | ``rng.beta(phi*kappa, (1-phi)*kappa)``             |
+-------------------------------------------------+----------------------------------------------------+
| **SciPy**                                       | ``scipy.stats.beta(alpha, beta)``                  |
+-------------------------------------------------+----------------------------------------------------+
| **SciPy with (φ, κ) parametrizaton**            | ``scipy.stats.beta(phi*kappa, (1-phi)*kappa)``     |
+-------------------------------------------------+----------------------------------------------------+
| **Distributions.jl**                            | ``Beta(alpha, beta)``                              |
+-------------------------------------------------+----------------------------------------------------+
| **Distributions.jl (φ, κ) parametrizaton**      | ``Beta(phi*kappa, (1-phi)*kappa)``                 |
+-------------------------------------------------+----------------------------------------------------+
| **Stan**                                        | ``beta(alpha, beta)``                              |
+-------------------------------------------------+----------------------------------------------------+
| **Stan with (φ, κ) parametrizaton**             | ``beta(phi*kappa, (1-phi)*kappa)``                 |
+-------------------------------------------------+----------------------------------------------------+


----


Related distributions
---------------------

- The :ref:`uniform` on the interval [0, 1] is a special case of the Beta distribution with :math:`\alpha = \beta = 1`.
- The Beta distribution is a special case of the :ref:`dirichlet` with :math:`K=2`.
----


Notes
-----

- The story of the Beta distribution is difficult to parse. Most importantly, the Beta distribution allows us to put probabilities on unknown probabilities. It is only defined on :math:`0 \le \theta \le 1`, and :math:`\theta` here can be interpreted as a probability, say of success in a Bernoulli trial.
- The case where :math:`\alpha = \beta = 0` is not technically a probability distribution because the PDF cannot be normalized. Nonetheless, it is often used as an improper prior, and this prior is known a Haldane prior, names after biologist `J. B. S. Haldane <https://en.wikipedia.org/wiki/J._B._S._Haldane>`_. The case where :math:`\alpha = \beta = 1/2`  is sometimes called a Jeffreys prior.
- The Beta distribution may also be parametrized in terms of the location parameter :math:`\phi` and concentration :math:`\kappa`, which are related to :math:`\alpha` and :math:`\beta` as

  .. math::
  
      \begin{align}
      &\phi = \frac{\alpha}{\alpha + \beta}, \\
      &\kappa = \alpha + \beta.
      \end{align}
  
  The location parameter :math:`\phi` is the mean of the distribution and :math:`\kappa`   is a measure of how broad it is. To convert back to an :math:`(\alpha, \beta)`   parametrization from a :math:`(\phi, \kappa)` parametrization, use
  
  .. math::
  
      \begin{align}
      &\alpha = \phi \kappa, \\
      &\beta = (1-\phi)\kappa.
      \end{align}
  
  The mean and variance in terms of :math:`\phi` and :math:`\kappa` are
  
  Mean: :math:`\displaystyle{\phi}`
  
  Variance: :math:`\displaystyle{\frac{\phi(1-\phi)}{1+\kappa}}`.
  

----


PDF and CDF plots
-----------------


In the α-β formulation:

.. bokeh-plot::
    :source-position: none

    import bokeh.io
    import distribution_explorer

    bokeh.io.show(distribution_explorer.explore('beta', background_fill_alpha=0, border_fill_alpha=0))


|


In the φ-κ formulation:

.. bokeh-plot::
    :source-position: none

    import bokeh.io
    import distribution_explorer

    bokeh.io.show(distribution_explorer.explore('beta_phi_kappa', background_fill_alpha=0, border_fill_alpha=0))


----

Links
-----

- `Wikipedia <https://en.wikipedia.org/wiki/Beta_distribution>`_
- `Numpy <https://docs.scipy.org/doc/numpy/reference/random/generated/numpy.random.Generator.beta.html>`_
- `Scipy <https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.beta.html>`_
- `Distributions.jl <https://juliastats.org/Distributions.jl/stable/univariate/#Distributions.Beta>`_
- `Stan <https://mc-stan.org/docs/functions-reference/beta-distribution.html>`_
