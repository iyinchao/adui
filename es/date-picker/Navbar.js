import * as React from "react";
import PropTypes from "prop-types";
import { DateUtils } from "day-picker-react";
import "./style";
import Button from "../button";
import { areSameMonth, getDefaultMaxDate, getDefaultMinDate } from "./core";
var prefix = "adui-date";

var Navbar = function Navbar(_ref) {
  var maxDate = _ref.maxDate,
      minDate = _ref.minDate,
      month = _ref.month,
      nextMonth = _ref.nextMonth,
      onNextClick = _ref.onNextClick,
      onPreviousClick = _ref.onPreviousClick;
  return React.createElement("div", {
    className: "".concat(prefix, "-navBar")
  }, React.createElement(Button, {
    className: "".concat(prefix, "-navButtonPrev"),
    leftIcon: "arrow-down",
    theme: "light",
    size: "small",
    onClick: function onClick() {
      onPreviousClick();
    },
    disabled: areSameMonth(minDate, month)
  }), React.createElement(Button, {
    className: "".concat(prefix, "-navButtonNext"),
    leftIcon: "arrow-down",
    theme: "light",
    size: "small",
    onClick: function onClick() {
      onNextClick();
    },
    disabled: areSameMonth(maxDate, month) || DateUtils.isDayAfter(nextMonth, maxDate)
  }));
};

Navbar.propTypes = {
  maxDate: PropTypes.any,
  minDate: PropTypes.any,
  month: PropTypes.instanceOf(Date),
  nextMonth: PropTypes.instanceOf(Date),
  onNextClick: PropTypes.any,
  onPreviousClick: PropTypes.any
};
Navbar.defaultProps = {
  maxDate: getDefaultMaxDate(),
  minDate: getDefaultMinDate(),
  month: null,
  nextMonth: null,
  onNextClick: function onNextClick() {},
  onPreviousClick: function onPreviousClick() {}
};
export default Navbar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvZGF0ZS1waWNrZXIvTmF2YmFyLnRzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsIkRhdGVVdGlscyIsIkJ1dHRvbiIsImFyZVNhbWVNb250aCIsImdldERlZmF1bHRNYXhEYXRlIiwiZ2V0RGVmYXVsdE1pbkRhdGUiLCJwcmVmaXgiLCJOYXZiYXIiLCJtYXhEYXRlIiwibWluRGF0ZSIsIm1vbnRoIiwibmV4dE1vbnRoIiwib25OZXh0Q2xpY2siLCJvblByZXZpb3VzQ2xpY2siLCJpc0RheUFmdGVyIiwicHJvcFR5cGVzIiwiYW55IiwiaW5zdGFuY2VPZiIsIkRhdGUiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sS0FBS0EsS0FBWixNQUF1QixPQUF2QjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxTQUFTQyxTQUFULFFBQTBCLGtCQUExQjtBQUNBLE9BQU8sU0FBUDtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsV0FBbkI7QUFDQSxTQUFTQyxZQUFULEVBQXVCQyxpQkFBdkIsRUFBMENDLGlCQUExQyxRQUFtRSxRQUFuRTtBQUVBLElBQU1DLE1BQU0sR0FBRyxXQUFmOztBQWVBLElBQU1DLE1BQThCLEdBQUcsU0FBakNBLE1BQWlDO0FBQUEsTUFDckNDLE9BRHFDLFFBQ3JDQSxPQURxQztBQUFBLE1BRXJDQyxPQUZxQyxRQUVyQ0EsT0FGcUM7QUFBQSxNQUdyQ0MsS0FIcUMsUUFHckNBLEtBSHFDO0FBQUEsTUFJckNDLFNBSnFDLFFBSXJDQSxTQUpxQztBQUFBLE1BS3JDQyxXQUxxQyxRQUtyQ0EsV0FMcUM7QUFBQSxNQU1yQ0MsZUFOcUMsUUFNckNBLGVBTnFDO0FBQUEsU0FRckM7QUFBSyxJQUFBLFNBQVMsWUFBS1AsTUFBTDtBQUFkLEtBQ0Usb0JBQUMsTUFBRDtBQUNFLElBQUEsU0FBUyxZQUFLQSxNQUFMLG1CQURYO0FBRUUsSUFBQSxRQUFRLEVBQUMsWUFGWDtBQUdFLElBQUEsS0FBSyxFQUFDLE9BSFI7QUFJRSxJQUFBLElBQUksRUFBQyxPQUpQO0FBS0UsSUFBQSxPQUFPLEVBQUUsbUJBQU07QUFDYk8sTUFBQUEsZUFBZTtBQUNoQixLQVBIO0FBUUUsSUFBQSxRQUFRLEVBQUVWLFlBQVksQ0FBQ00sT0FBRCxFQUFVQyxLQUFWO0FBUnhCLElBREYsRUFXRSxvQkFBQyxNQUFEO0FBQ0UsSUFBQSxTQUFTLFlBQUtKLE1BQUwsbUJBRFg7QUFFRSxJQUFBLFFBQVEsRUFBQyxZQUZYO0FBR0UsSUFBQSxLQUFLLEVBQUMsT0FIUjtBQUlFLElBQUEsSUFBSSxFQUFDLE9BSlA7QUFLRSxJQUFBLE9BQU8sRUFBRSxtQkFBTTtBQUNiTSxNQUFBQSxXQUFXO0FBQ1osS0FQSDtBQVFFLElBQUEsUUFBUSxFQUNOVCxZQUFZLENBQUNLLE9BQUQsRUFBVUUsS0FBVixDQUFaLElBQWdDVCxTQUFTLENBQUNhLFVBQVYsQ0FBcUJILFNBQXJCLEVBQWdDSCxPQUFoQztBQVRwQyxJQVhGLENBUnFDO0FBQUEsQ0FBdkM7O0FBa0NBRCxNQUFNLENBQUNRLFNBQVAsR0FBbUI7QUFJakJQLEVBQUFBLE9BQU8sRUFBRVIsU0FBUyxDQUFDZ0IsR0FKRjtBQVFqQlAsRUFBQUEsT0FBTyxFQUFFVCxTQUFTLENBQUNnQixHQVJGO0FBWWpCTixFQUFBQSxLQUFLLEVBQUVWLFNBQVMsQ0FBQ2lCLFVBQVYsQ0FBcUJDLElBQXJCLENBWlU7QUFnQmpCUCxFQUFBQSxTQUFTLEVBQUVYLFNBQVMsQ0FBQ2lCLFVBQVYsQ0FBcUJDLElBQXJCLENBaEJNO0FBb0JqQk4sRUFBQUEsV0FBVyxFQUFFWixTQUFTLENBQUNnQixHQXBCTjtBQXdCakJILEVBQUFBLGVBQWUsRUFBRWIsU0FBUyxDQUFDZ0I7QUF4QlYsQ0FBbkI7QUEyQkFULE1BQU0sQ0FBQ1ksWUFBUCxHQUFzQjtBQUNwQlgsRUFBQUEsT0FBTyxFQUFFSixpQkFBaUIsRUFETjtBQUVwQkssRUFBQUEsT0FBTyxFQUFFSixpQkFBaUIsRUFGTjtBQUdwQkssRUFBQUEsS0FBSyxFQUFFLElBSGE7QUFJcEJDLEVBQUFBLFNBQVMsRUFBRSxJQUpTO0FBS3BCQyxFQUFBQSxXQUFXLEVBQUUsdUJBQU0sQ0FBRSxDQUxEO0FBTXBCQyxFQUFBQSxlQUFlLEVBQUUsMkJBQU0sQ0FBRTtBQU5MLENBQXRCO0FBU0EsZUFBZU4sTUFBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCB7IERhdGVVdGlscyB9IGZyb20gXCJkYXktcGlja2VyLXJlYWN0XCJcbmltcG9ydCBcIi4vc3R5bGVcIlxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vYnV0dG9uXCJcbmltcG9ydCB7IGFyZVNhbWVNb250aCwgZ2V0RGVmYXVsdE1heERhdGUsIGdldERlZmF1bHRNaW5EYXRlIH0gZnJvbSBcIi4vY29yZVwiXG5cbmNvbnN0IHByZWZpeCA9IFwiYWR1aS1kYXRlXCJcblxuZXhwb3J0IGludGVyZmFjZSBJTmF2YmFyUHJvcHMge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbiAgbWF4RGF0ZTogRGF0ZVxuICBtaW5EYXRlOiBEYXRlXG4gIG1vbnRoOiBEYXRlIHwgbnVsbFxuICBuZXh0TW9udGg6IERhdGUgfCBudWxsXG4gIG9uTmV4dENsaWNrOiAoKSA9PiB2b2lkXG4gIG9uUHJldmlvdXNDbGljazogKCkgPT4gdm9pZFxufVxuXG4vKipcbiAqIOaXpeacn+mAieaLqSBOYXZiYXJcbiAqL1xuY29uc3QgTmF2YmFyOiBSZWFjdC5GQzxJTmF2YmFyUHJvcHM+ID0gKHtcbiAgbWF4RGF0ZSxcbiAgbWluRGF0ZSxcbiAgbW9udGgsXG4gIG5leHRNb250aCxcbiAgb25OZXh0Q2xpY2ssXG4gIG9uUHJldmlvdXNDbGljayxcbn06IElOYXZiYXJQcm9wcykgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1uYXZCYXJgfT5cbiAgICA8QnV0dG9uXG4gICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0tbmF2QnV0dG9uUHJldmB9XG4gICAgICBsZWZ0SWNvbj1cImFycm93LWRvd25cIlxuICAgICAgdGhlbWU9XCJsaWdodFwiXG4gICAgICBzaXplPVwic21hbGxcIlxuICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICBvblByZXZpb3VzQ2xpY2soKVxuICAgICAgfX1cbiAgICAgIGRpc2FibGVkPXthcmVTYW1lTW9udGgobWluRGF0ZSwgbW9udGgpfVxuICAgIC8+XG4gICAgPEJ1dHRvblxuICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LW5hdkJ1dHRvbk5leHRgfVxuICAgICAgbGVmdEljb249XCJhcnJvdy1kb3duXCJcbiAgICAgIHRoZW1lPVwibGlnaHRcIlxuICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgb25OZXh0Q2xpY2soKVxuICAgICAgfX1cbiAgICAgIGRpc2FibGVkPXtcbiAgICAgICAgYXJlU2FtZU1vbnRoKG1heERhdGUsIG1vbnRoKSB8fCBEYXRlVXRpbHMuaXNEYXlBZnRlcihuZXh0TW9udGgsIG1heERhdGUpXG4gICAgICB9XG4gICAgLz5cbiAgPC9kaXY+XG4pXG5cbk5hdmJhci5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiDmnIDlpKfpmZDliLbml6XmnJ9cbiAgICovXG4gIG1heERhdGU6IFByb3BUeXBlcy5hbnksXG4gIC8qKlxuICAgKiDmnIDlsI/pmZDliLbml6XmnJ9cbiAgICovXG4gIG1pbkRhdGU6IFByb3BUeXBlcy5hbnksXG4gIC8qKlxuICAgKiDlvZPliY3mnIjnmoTml6XmnJ9cbiAgICovXG4gIG1vbnRoOiBQcm9wVHlwZXMuaW5zdGFuY2VPZihEYXRlKSxcbiAgLyoqXG4gICAqIOS4i+S4quaciOeahOaXpeacn1xuICAgKi9cbiAgbmV4dE1vbnRoOiBQcm9wVHlwZXMuaW5zdGFuY2VPZihEYXRlKSxcbiAgLyoqXG4gICAqIG5leHQgY2xpY2sgaGFuZGxlclxuICAgKi9cbiAgb25OZXh0Q2xpY2s6IFByb3BUeXBlcy5hbnksXG4gIC8qKlxuICAgKiBwcmV2aW91cyBjbGljayBoYW5kbGVyXG4gICAqL1xuICBvblByZXZpb3VzQ2xpY2s6IFByb3BUeXBlcy5hbnksXG59XG5cbk5hdmJhci5kZWZhdWx0UHJvcHMgPSB7XG4gIG1heERhdGU6IGdldERlZmF1bHRNYXhEYXRlKCksXG4gIG1pbkRhdGU6IGdldERlZmF1bHRNaW5EYXRlKCksXG4gIG1vbnRoOiBudWxsLFxuICBuZXh0TW9udGg6IG51bGwsXG4gIG9uTmV4dENsaWNrOiAoKSA9PiB7fSxcbiAgb25QcmV2aW91c0NsaWNrOiAoKSA9PiB7fSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyXG4iXX0=