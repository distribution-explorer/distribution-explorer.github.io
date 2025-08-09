Vignette contents
=================

For each probability distribution, the following are typically presented.

- Name of the distribution.
- Its story.
- An example of a random variable that is described by the distribution. Most examples are biological in nature (after all, I teach students in the biological sciences).
- The parameters of the distribution.
- The support, or the domain for which the probability is nonzero.
- The probability mass function (for discrete distributions) or probability density function (for continuous distributions). Importantly, **I use the parametrization that Stan uses.**
- The cumulative distribution function.
- The first moment (mean) and second central moment (variance) of the distribution.
- Syntax for how to use the distribution using ``numpy.random``, ``scipy.stats``, Distributions.jl, and Stan.
- Description of relations to other distributions.
- Miscellaneous notes.
- Interactive plots of the PMF/PDF and CDF of the distribution.
- Links to the Wikipedia page for the distribution and to documentation from NumPy, SciPy, Distributions.jl, and Stan.

For some distributions, not all of these are shown.



How to use the interactive plots
--------------------------------

Below I show an interactive plot for the Normal distribution to demonstrate how to use the plots.

.. bokeh-plot::
    :source-position: none

    import bokeh.io
    import distribution_explorer

    bokeh.io.show(distribution_explorer.explore('normal', background_fill_alpha=0, border_fill_alpha=0))

The widgets above the PDF plot include a slider for each of the parameters of the distribution. You can adjust the position of the slider to adjust the value of the parameter, and the plots update accordingly. The text windows on either side of the sliders allow you to adjust the allowable range of the sliders. If you choose a value outside of the allowable values of the parameter, the minimum or maximum allowed value of the parameter will be used instead.

For some distributions, there are a set of quantile setting widgets above the CDF plot. You can specify the value for each quantile and the parameters are adjusted such that the distribution has the specified quantile. This can be particularly useful for coming up with priors in a Bayesian setting. The quantile setting is only active when the "Quantile setter mode" switch is active. When it is active, the sliders become inactive.

To the side of the CDF plot is a toolbar with various options to adjust your views of the plots. Most useful are the pan, wheel zoom, and reset tools. Selecting the pan tool (the four arrows), you can click on a plot and drag to move the curves to more convenient positions. If you select the wheel zoom tool, you can hover over the x-axis and zoom in or out to different regions of the sample space of the distribution. Clicking the reset tool resets the limits of the axes to reasonable values so that you can see the important parts of the PDF/PMF and CDF.

