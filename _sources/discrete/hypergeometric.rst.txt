.. _hypergeometric:

Hypergeometric distribution
==============================

----


Story
-----

Consider an urn with :math:`a` white balls and :math:`b` black balls. Draw :math:`N` balls from this urn without replacement. The number white balls drawn, :math:`n`, is Hypergeometrically distributed.


----


Example
-------

There are :math:`a+b` finches on an island, and :math:`a` of them are tagged (and therefore :math:`b` of them are untagged). You capture :math:`N` finches. The number of captured tagged finches :math:`n` is Hypergeometrically distributed.


----


Parameters
----------

There are three parameters: the number of draws :math:`N`, the number of white balls :math:`a`, and the number of black balls :math:`b`.


----


Support
-------

The Hypergeometric distribution is supported on the set of integers between :math:`\mathrm{max}(0, N-b)` and :math:`\mathrm{min}(N, a)`, inclusive.

----


Probability mass function
-------------------------

.. math::

    \begin{align}
    f(n; N, a, b) = \frac{\begin{pmatrix}a \\ n\end{pmatrix} \begin{pmatrix}b \\ N-n\end{pmatrix}}{\begin{pmatrix}a+b \\ N\end{pmatrix}}.
    \end{align}


----


Cumulative distribution function
--------------------------------

The cumulative distribution function evaluated for integer :math:`n` is

.. math::

    \begin{align}
    F(n; N, a, b) = 1 - \frac{\begin{pmatrix}N \\ n+1\end{pmatrix} \begin{pmatrix}a + b - B \\ a - n - 1\end{pmatrix}}{\begin{pmatrix}a+b \\ a\end{pmatrix}}\,_3F_2(1, n-a+1, n+1-N; n+2, n+b-N+2; 1),
    \end{align}

where :math:`_3F_2(a_1, a_2, a_3;b_1, b_2; z)` denotes the `generalized hypergeometric function <https://en.wikipedia.org/wiki/Generalized_hypergeometric_function>`_.

----


Moments
-------

Mean: :math:`\displaystyle{N\,\frac{a}{a+b}}`


Variance: :math:`\displaystyle{N\,\frac{ab}{(a + b)^2}\,\frac{a+b-N}{a+b-1}}`


----


Usage
-----

+----------------------+----------------------------------------+
| Package              | Syntax                                 |
+======================+========================================+
| **NumPy**            | ``rng.hypergeometric(a, b, N)``        |
+----------------------+----------------------------------------+
| **SciPy**            | ``scipy.stats.hypergeom(a+b, a, N)``   |
+----------------------+----------------------------------------+
| **Distributions.jl** | ``Hypergeometric(a, b, N)``            |
+----------------------+----------------------------------------+
| **Stan**             | ``hypergeometric(N, a, b)``            |
+----------------------+----------------------------------------+


----


Related distributions
---------------------

- In the limit of :math:`a+b\to\infty` such that :math:`a/(a+b)` is fixed, we get a :ref:`binomial` with parameters :math:`N = N` and :math:`\theta = a/(a+b)`.

----


Notes
-----

- This distribution is analogous to the :ref:`binomial`, except that the Binomial distribution describes draws from an urn *with* replacement. In the analogy, the Binomial parameter :math:`\theta` is :math:`\theta = a/(a+b)`.
- SciPy uses a different parametrization than NumPy and Stan. Let :math:`M = a+b` be the total number of balls in the urn. Then, noting the order of the parameters, since this is what ``scipy.stats.hypergeom`` expects, the PMF may be written as

  .. math::
  
      \begin{align}
      f(n;M,a,N) = \frac{\begin{pmatrix}a \\ n\end{pmatrix} \begin{pmatrix}M-a \\   N-n\end{pmatrix}}{\begin{pmatrix}M \\ N\end{pmatrix}}.
      \end{align}

- Although NumPy and Stan use the same parametrization, note the difference in the ordering of the arguments.


----


PMF and CDF plots
-----------------

.. bokeh-plot::
    :source-position: none

    import bokeh.io
    import distribution_explorer

    bokeh.io.show(distribution_explorer.explore('hypergeometric', background_fill_alpha=0, border_fill_alpha=0))

----

Links
-----

- `Wikipedia <https://en.wikipedia.org/wiki/Hypergeometric_distribution>`_
- `Numpy <https://docs.scipy.org/doc/numpy/reference/random/generated/numpy.random.Generator.hypergeometric.html>`_
- `Scipy <https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.hypergeom.html>`_
- `Distributions.jl <https://juliastats.org/Distributions.jl/stable/univariate/#Distributions.Hypergeometric>`_
- `Stan <https://mc-stan.org/docs/functions-reference/hypergeometric-distribution.html>`_