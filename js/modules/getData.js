export const getData = () =>
  fetch("/data/FishEyeData.json").then((response) => response.json());
