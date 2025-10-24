import React, { useState } from "react";

export const ControlledOnboardingFlow = ({
  children,
  onFinish,
  currentIndex,
  onNext,
}) => {
  const goToNext = (stepData) => {
    onNext(stepData);
  };
  if (currentChild >= React.Children.toArray(children)) {
    onFinish();
    return <h1>Done</h1>;
  }

  const currentChild = React.Children.toArray(children)[currentIndex];

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { goToNext });
  }

  return currentChild;
};
