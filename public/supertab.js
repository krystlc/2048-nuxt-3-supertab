window.addEventListener("supertab.event", (event) => {
  function emitAccessStatus(bool) {
    window.dispatchEvent(
      new CustomEvent("accessStatus", {
        detail: {
          access: bool,
        },
      })
    );
  }

  switch (event.detail.type) {
    case "ready":
      widget = new event.detail.Widget({
        clientId: "client.f2caab29-cc9d-4cdc-aeba-e3034cfdb1f5",
        merchantName: "2048: Cyber Fusion Edition",
      });
      emitAccessStatus(false);
      break;
    case "back_to_caller":
      if (event.detail.accessStatus == "access_granted") {
        emitAccessStatus(true);
      } else {
        emitAccessStatus(false);
      }
      break;
  }
});
