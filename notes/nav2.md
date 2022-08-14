---
title: 'Getting a Robot to Navigate Safely'
date: 'August 1, 2022'
excerpt: ''
tags: 'Robotics'
---

This is written using ROS 2.

## Action Server

Click [here](https://docs.ros.org/en/foxy/Tutorials/Beginner-CLI-Tools/Understanding-ROS2-Actions/Understanding-ROS2-Actions.html) for the ROS 2 documentation.

Actions are intended for long-running tasks. These are somewhat similar to ROS services, which have two parts: a **request** and **response**. However,
since these are specifically for long-running tasks, they provide steady **feedback** to the client.

They are also preemptable, meaning that they can be canceled while they are running.

From the ROS 2 documentation:

    An “action client” node sends a goal to an “action server” node that acknowledges the goal and returns a stream of feedback and a result.


