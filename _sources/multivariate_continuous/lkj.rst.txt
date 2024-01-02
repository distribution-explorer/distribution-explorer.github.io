.. _lkj:

Lewandowski-Kurowicka-Joe (LKJ) distribution
============================================


----


Story
-----

Probability distribution for positive definite correlation matrices, or equivalently for their Cholesky factors.

To understand what a correlation matrix is, it helps to think first of a covariance matrix :math:`\mathsf{\Sigma}`, such as those used in the :ref:`multivariate_normal`. The covariance matrix may also be written as :math:`\mathsf{\Sigma} = \mathsf{S} \cdot \mathsf{C} \cdot \mathsf{S}`, where :math:`\mathsf{S} = \sqrt{\mathrm{diag}(\mathsf{\Sigma})}`, and entry :math:`i, j` in the **correlation matrix** :math:`\mathsf{C}` is :math:`C_{ij} = \sigma_{ij}/\sigma_i\sigma_j`. The diagonal of the correlation matrix is all ones, and the off-diagonal entries can range from :math:`-1` to :math:`1`. Note also that because :math:`\mathsf{\Sigma}` is symmetric and positive definite, so is :math:`\mathsf{C}`. 


----


Parameters
----------

There is one positive scalar parameter, :math:`\eta`, which tunes the strength of the correlations. If :math:`\eta=1`, the density is uniform over all correlation matrix. If :math:`\eta>1`, matrices with a stronger diagonal (and therefore smaller correlations) are favored. If :math:`\eta<1`, the diagonal is weak and correlations are favored.

----


Support
-------

The LKJ distribution is supported over the set of :math:`K\times K` Cholesky factors of real symmetric positive definite matrices.


----


Probability density function
----------------------------

The LKJ distribution is a distribution over a :math:`K\times K` correlation matrix :math:`\mathsf{C}`. The normalization constant is a complicated expression involving Beta functions; the important feature of the PDF is that the probability density function is proportional to the determinant of the correlation matrix raised to the :math:`\eta - 1` power.

.. math::

        \begin{align}
		f(\mathsf{C}|\eta) =\left(2^{\sum_{k=1}^{K-1}(2(\eta-1)+K-k)(K-k)}\prod_{k=1}^{K-1}\left(B(\eta+(K-k-1)/2,\eta + (K-k-1)/2)\right)^{K-k}\right) (\mathrm{det}\,\mathsf{C})^{\eta-1}.
		\end{align}

Here, :math:`B(\alpha, \beta)` is a `Beta function <https://en.wikipedia.org/wiki/Beta_function>`_. 

The marginal distribution for each off-diagonal entry in :math:`\mathsf{C}` is a :ref:`beta` with parameters :math:`\alpha = \beta = \eta - 1 + K/2`.

----

Moments
-------

Mean: Identity matrix of order :math:`K`. That is, each off-diagonal entry is zero, meaning that the average correlation between covariates is zero.

Variance of each entry off-diagonal entry: :math:`\displaystyle{\frac{4\left(\eta + \frac{K}{2} - 1\right)^2}{(2\eta + K - 2)^2 (2\eta + K -1)}}`


----


Usage
-----

The usage below assumes that ``mu`` is a length :math:`K` array, ``Sigma`` is a :math:`K\times K` symmetric positive definite matrix, and ``L`` is a :math:`K\times K` lower-triangular matrix with strictly positive values on the diagonal that is a Cholesky factor.

+----------------------+----------------------------------------------------------+
| Package              | Syntax                                                   |
+==================-===+==========================================================+
| **NumPy**            | not available                                            |
+----------------------+----------------------------------------------------------+
| **SciPy**            | not available                                            |
+----------------------+----------------------------------------------------------+
| **Stan**             | ``lkj_corr(eta)``                                        |
+----------------------+----------------------------------------------------------+
| **Stan Cholesky**    | ``lkj_corr_cholesky(eta)``                               |
+----------------------+----------------------------------------------------------+
| **Distributions.jl** | ``LKJCholesky(K, eta, uplo='L')                          |
+----------------------+----------------------------------------------------------+


----

Related distributions
---------------------

- Each off-diagonal entry of a correlation matrix that is LKJ-distributed has a marginal distribution that is a :ref:`beta`.


----

Notes
-----

- The most common use case is as a prior for a covariance matrix. Note that LKJ distribution as implemented in Stan gives *correlation* matrices, not covariance matrices. We typically work with Cholesky factors. To get the covariance Cholesky factor from the correlation Cholesky factor, we need to multiply the correlation Cholesky factor by a diagonal matrix constructed from the variances of the individual variates. Here is an example using the LKJ distribution in a model with a multivariate Normal likelihood in Stan.

.. code-block:: stan

	parameters {
	  // Vector of means
	  vector[K] mu;

	  // Cholesky factor for the correlation matrix
	  cholesky_factor_corr[K] L_Omega;

	  // Sqrt of variances for each variate
	  vector<lower=0>[K] L_std;
	} 


	transformed parameters {
	  // Cholesky factor for covariance matrix
	  matrix[K, K] L_Sigma = diag_pre_multiply(L_std, L_Omega);
	}


	model {
	  // Prior on Cholesky decomposition of correlation matrix
	  L_Omega ~ lkj_corr_cholesky(1);

	  // Prior on standard deviations for each variate
	  L_std ~ normal(0, 2.5);

	  // Likelihood
	  y ~ multi_normal_cholesky(mu, L_Sigma);
	}


----

Links
-----

- `Original paper <https://doi.org/10.1016/j.jmva.2009.04.008>`_
- `Stan <https://mc-stan.org/docs/2_22/functions-reference/lkj-correlation.html>`_
- `Stan Cholesky formulation <https://mc-stan.org/docs/2_22/functions-reference/cholesky-lkj-correlation-distribution.html>`_

