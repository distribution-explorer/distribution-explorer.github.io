Vignette contents
=================

For each probability distribution, the following are typically presented.

- Name of the distribution.
- Its story.
- An example of a random variable that is described by the distribution. Most examples are biological in nature (after all, I teach students in the biological sciences).
- The parameters of the distribution.
- The support, or the domain for which the probability is nonzero.
- The probability mass function (for discrete distributions) or probability density function (for continuous distributions). Importantly, **I use the parametrization that Stan uses.**
- The first moment (mean) and second central moment (variance) of the distribution.
- Syntax for how to use the distribution using ``numpy.random``, ``scipy.stats``, and Stan.
- Description of relations to other distributions.
- Miscellaneous notes.
- Interactive plots of the PMF/PDF and CDF of the distribution.
- Links to the Wikipedia page for the distribution and to documentation from NumPy, SciPy, and Stan.

For some distributions, not all of these are shown.

I omit analytical expression for the CDF because CDFs are often expressed as special functions, such as `regularized incomplete beta functions <https://en.wikipedia.org/wiki/Beta_function#Incomplete_beta_function>`_ or `error functions <https://en.wikipedia.org/wiki/Error_function>`_. They can also be easily looked up. We mainly use them for comparing ECDFs in plots, and we can use the ``scipy.stats`` module to just compute them for plotting.


How to use the interactive plots
--------------------------------

Below I show an interactive plot for the Normal distribution to demonstrate how to use the plots.

.. bokeh-plot::
    :source-position: none

    import bokeh.io
    import distribution_explorer

    bokeh.io.show(distribution_explorer.explore('normal', background_fill_alpha=0, border_fill_alpha=0))


There is a slider for each of the parameters of the distribution. You can adjust the position of the slider to adjust the value of the parameter, and the plots updated accordingly. The text windows on either side of the sliders allow you to adjust the allowable range of the sliders. If you choose a value outside of the allowable values of the parameter, the minimum or maximum allowed value of the parameter will be used instead.

To the side of the CDF plot is a toolbar with various options to adjust your views of the plots. Most useful are the pan, wheel zoom, and reset tools. Selecting the pan tool (the four arrows), you can click on a plot and drag to more the curves to more convenient positions. If you select the wheel zoom tool, you can hover over the x-axis and zoom in or out to different regions of the sample space of the distribution. The reset tool allows you to rescale the axes of the plot.

