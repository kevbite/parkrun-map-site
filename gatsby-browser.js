export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `We've just updated you ` +
    `reload to display the latest version?`
  );

  if (answer === true) {
    window.location.reload();
  }
}