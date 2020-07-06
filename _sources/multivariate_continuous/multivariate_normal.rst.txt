.. _multivariate_normal:

Multivariate Normal distribution
================================


----


Story
-----

This is a generalization of the univariate :ref:`normal`.


----


Example
-------

Finch beaks are measured for beak depth and beak length. The resulting distribution of depths and length is Normal. In this case, the Normal is bivariate, with :math:`\boldsymbol{\mu} = (\mu_d, \mu_l)` and the covariance matrix is

.. math::

    \begin{align}
    \mathsf{\Sigma} = \begin{pmatrix}\sigma_\mathrm{d}^2 & \sigma_\mathrm{dl} \\ \sigma_\mathrm{dl} & \sigma_\mathrm{l}^2\end{pmatrix}.
    \end{align}


----

Parameters
----------

There is one vector-valued parameter, :math:`\boldsymbol{\mu}`, and a matrix-valued parameter, :math:`\mathsf{\Sigma}`, which are location and scale parameters respectively. The matrix scale parameter is referred to as a covariance matrix. The covariance matrix is symmetric and strictly positive definite.

----


Support
-------

The :math:`K`-variate Normal distribution is supported on :math:`\mathbb{R}^K`.


----


Probability density function
----------------------------

.. math::

	\begin{align}
	f(\mathbf{y};\boldsymbol{\mu}, \mathsf{\Sigma}) = \frac{1}{\sqrt{(2\pi)^K \mathrm{det}\mathsf{\Sigma}}}\,\exp\left[-\frac{1}{2}(\mathbf{y} - \boldsymbol{\mu})^\mathsf{T} \cdot \mathsf{\Sigma}^{-1} \cdot (\mathbf{y} - \boldsymbol{\mu})\right].
	\end{align}


----

Moments
-------

Mean of :math:`y_i`: :math:`\mu_i`

Variance of :math:`y_i`: :math:`\Sigma_{ii}`

Covariance of :math:`y_i, y_j` with :math:`j\ne i`: :math:`\Sigma_{ij}`

----


Usage
-----

The usage below assumes that ``mu`` is a length :math:`K` array, ``Sigma`` is a :math:`K\times K` symmetric positive definite matrix, and ``L`` is a :math:`K\times K` lower-triangular matrix with strictly positive values on the diagonal that is a Cholesky factor.

+---------------------+----------------------------------------------------------+
| Package             | Syntax                                                   |
+=====================+==========================================================+
| **NumPy**           | ``rg.multivariate_normal(mu, Sigma)``                    |
+---------------------+----------------------------------------------------------+
| **NumPy Cholesky**  | ``rg.multivariate_normal(mu, np.dot(L, L.T))``           |
+---------------------+----------------------------------------------------------+
| **SciPy**           | ``scipy.stats.multivariate_normal(mu, Sigma)``           |
+---------------------+----------------------------------------------------------+
| **SciPy Cholesky**  | ``scipy.stats.multivariate_normal(mu, np.dot(L, L.T))``  |
+---------------------+----------------------------------------------------------+
| **Stan**            | ``multi_normal(mu, Sigma)``                              |
+---------------------+----------------------------------------------------------+
+ **Stan Cholesky**   | ``multi_normal_cholesky(mu, L)``                         |
+---------------------+----------------------------------------------------------+


----

Related distributions
---------------------

- The Multivariate Normal is a generalization of the univariate :ref:`normal`.


----

Notes
-----

- The covariance matrix may also be written as :math:`\mathsf{\Sigma} = \mathsf{S} \cdot \mathsf{C} \cdot \mathsf{S}`, where :math:`\mathsf{S} = \sqrt{\mathrm{diag}(\mathsf{\Sigma})}`, and entry :math:`i, j` in the **correlation matrix** :math:`\mathsf{C}` is :math:`C_{ij} = \sigma_{ij}/\sigma_i\sigma_j`.
- Because :math:`\Sigma` is symmetric and strictly positive definite, it can be uniquely defined in terms of its :ref:`Cholesky decomposition <https://en.wikipedia.org/wiki/Cholesky_decomposition>`, :math:`\mathsf{L}`, which satisfies :math:`\mathsf{\Sigma} = \mathsf{L}\cdot\mathsf{L}^\mathsf{T}`. In practice, you will almost always use the Cholesky representation of the Multivariate Normal distribution in Stan.

----

Links
-----

- `Wikipedia <https://en.wikipedia.org/wiki/Multivariate_normal_distribution>`_
- `Numpy <https://docs.scipy.org/doc/numpy/reference/random/generated/numpy.random.Generator.multivariate_normal.html>`_
- `Scipy <https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.multivariate_normal.html>`_
- `Stan <https://mc-stan.org/docs/2_21/functions-reference/multivariate-normal-distribution.html>`_
