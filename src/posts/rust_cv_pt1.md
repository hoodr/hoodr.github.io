# Getting into Computer Vision with Rust

Computer vision is something I've had an interest in for ages. It combined my
love for photo/video with math and computer science. However, I never really had
a chance to explore this avenue at university. As such, I had to slowly get into
this outside of school after work and we all know how hard a side project can
get. So now I've decided that it's about time I really put hands to keyboard and
dive into computer vision and my favorite programming language, Rust. On the
advice of some far more knowledgable folk than me, I've decided to start a blog
and chronicle this journey.

## The Project

Way back in the day (2016) I was fascinated with a phd thesis by Jakob Engel,
then a phd student at TUM, the Technical University of Munich. The thesis title
was "DSO: Direct Sparse Odeometry". Visual odometry is defined as "the process
of determining the position and orientation of a robot by analyzing the
associated camera images." Now, the standard approach to visual odometry is the
following:
1. Acquire input images
2. Apply image correction
3. Feature detection
4. Check flow field vectors for potential tracking errors and remove outliers
5. Estimation of the camera motion from the optical flow
  a. Kalman filter for state estimate distribution maintenance.
  b. Find the geometric and 3D properties of the features that minimize a cost
     function based on the re-projection error between two adjacent images. This
     can be done by mathematical minimization or random sampling. 
6. Periodic repopulation of trackpoints to maintain coverage across the image

Jakob Engel and his advisors first proposed this in his paper "LSD-SLAM:
Large-Scale Direct Monocular SLAM" which states in the abstract:

> We propose a direct (feature-less) monocular SLAM algorithm which, in contrast
to current state-of-the-art regarding direct methods, allows to build
large-scale, consistent maps of the environment. Along with highly accurate pose
estimation based on direct image alignment, the 3D environment is reconstructed
in real-time as pose-graph of keyframes with associated semi-dense depth maps.
These are obtained by filtering over a large number of pixelwise small-baseline
stereo comparisons. The explicitly scale-drift aware formulation allows the
approach to operate on challenging sequences including large variations in scene
scale. Major enablers are two key novelties: (1) a novel direct tracking method
which operates on sim(3), thereby explicitly detecting scale-drift, and (2) an
elegant probabilistic solution to include the effect of noisy depth values into
tracking. The resulting direct monocular SLAM system runs in real-time on a CPU.

He then went and built a practical application of this paper with "DSO", which
applied this direct approach. DSO is 5 years old now and while it may not be the
most novel and/or current approach, but it seems to me like an ideal candidate
to translate from its original c++ into Rust as a way to show how Rust can
replace c++ for applications like this, and take a deep dive into the practical
application of computer vision theory. I'd really like to thank Jakob for open
sourcing the code for his project as well as the datasets that he used. It's
really cool to see the working code of someone who clearly poured a lot of time
and energy to see out the vision of the original proposal. This blog post has
been a long time coming, and I hope it to be a motivating factor in getting this
project over the proverbial finish line while also being an awesome (re)learning
experience (linear algebra was one of my favorite courses at university and it
deeply saddens me just how much I've forgotten). Anyways, stay tuned for more!
