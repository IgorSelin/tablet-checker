const userAgent = navigator.userAgent.toLowerCase();
const isTablet =
  /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(
    userAgent
  );
alert(`Is tablet: ${isTablet}`);
