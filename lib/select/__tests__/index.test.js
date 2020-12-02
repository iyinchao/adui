"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var React = _interopRequireWildcard(require("react"));

var _enzyme = require("enzyme");

var _ = _interopRequireDefault(require(".."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Option = _["default"].Option;
describe("Select", function () {
  beforeEach(function () {
    jest.useFakeTimers();
  });
  afterEach(function () {
    jest.useRealTimers();
  });
  it("Select 是否正确渲染", function () {
    var wrapper = (0, _enzyme.mount)(React.createElement(_["default"], null));
    expect(wrapper).toMatchSnapshot();
  });
  it("Select 是否能内部驱动", function () {
    var wrapper = (0, _enzyme.mount)(React.createElement(_["default"], {
      defaultOpen: true,
      defaultValue: 2,
      style: {
        width: "120px"
      }
    }, React.createElement(Option, {
      value: 1
    }, "\u670B\u53CB\u5708"), React.createElement(Option, {
      value: 2
    }, "\u516C\u4F17\u53F7")));
    var dropdownWrapper = (0, _enzyme.mount)(wrapper.find("Trigger").instance().getComponent());
    expect(dropdownWrapper.props().visible).toBe(true);
    dropdownWrapper.find(".adui-select-item-option").at(0).simulate("click");
    dropdownWrapper = (0, _enzyme.mount)(wrapper.find("Trigger").instance().getComponent());
    expect(wrapper.state().value).toBe(1);
    expect(dropdownWrapper.props().visible).toBe(false);
  });
  it("Select 是否受外部控制", function () {
    var onSelect = jest.fn();
    var wrapper = (0, _enzyme.mount)(React.createElement(_["default"], {
      open: true,
      value: 2,
      style: {
        width: "120px"
      },
      onSelect: onSelect
    }, React.createElement(Option, {
      value: 1
    }, "\u670B\u53CB\u5708"), React.createElement(Option, {
      value: 2
    }, "\u516C\u4F17\u53F7")));
    var dropdownWrapper = (0, _enzyme.mount)(wrapper.find("Trigger").instance().getComponent());
    expect(wrapper.state().value).toBe(2);
    expect(dropdownWrapper.props().visible).toBe(true);
    dropdownWrapper.find(".adui-select-item-option").at(0).simulate("click");
    dropdownWrapper = (0, _enzyme.mount)(wrapper.find("Trigger").instance().getComponent());
    expect(wrapper.state().value).toBe(2);
    expect(dropdownWrapper.props().visible).toBe(true);
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvc2VsZWN0L19fdGVzdHNfXy9pbmRleC50ZXN0LnRzeCJdLCJuYW1lcyI6WyJPcHRpb24iLCJTZWxlY3QiLCJkZXNjcmliZSIsImJlZm9yZUVhY2giLCJqZXN0IiwidXNlRmFrZVRpbWVycyIsImFmdGVyRWFjaCIsInVzZVJlYWxUaW1lcnMiLCJpdCIsIndyYXBwZXIiLCJleHBlY3QiLCJ0b01hdGNoU25hcHNob3QiLCJ3aWR0aCIsImRyb3Bkb3duV3JhcHBlciIsImZpbmQiLCJpbnN0YW5jZSIsImdldENvbXBvbmVudCIsInByb3BzIiwidmlzaWJsZSIsInRvQmUiLCJhdCIsInNpbXVsYXRlIiwic3RhdGUiLCJ2YWx1ZSIsIm9uU2VsZWN0IiwiZm4iXSwibWFwcGluZ3MiOiI7Ozs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7SUFHUUEsTSxHQUFXQyxZLENBQVhELE07QUFNUkUsUUFBUSxDQUFDLFFBQUQsRUFBVyxZQUFNO0FBQ3ZCQyxFQUFBQSxVQUFVLENBQUMsWUFBTTtBQUNmQyxJQUFBQSxJQUFJLENBQUNDLGFBQUw7QUFTRCxHQVZTLENBQVY7QUFZQUMsRUFBQUEsU0FBUyxDQUFDLFlBQU07QUFDZEYsSUFBQUEsSUFBSSxDQUFDRyxhQUFMO0FBQ0QsR0FGUSxDQUFUO0FBSUFDLEVBQUFBLEVBQUUsQ0FBQyxlQUFELEVBQWtCLFlBQU07QUFDeEIsUUFBTUMsT0FBTyxHQUFHLG1CQUFNLG9CQUFDLFlBQUQsT0FBTixDQUFoQjtBQUNBQyxJQUFBQSxNQUFNLENBQUNELE9BQUQsQ0FBTixDQUFnQkUsZUFBaEI7QUFDRCxHQUhDLENBQUY7QUFLQUgsRUFBQUEsRUFBRSxDQUFDLGdCQUFELEVBQW1CLFlBQU07QUFDekIsUUFBTUMsT0FBTyxHQUFHLG1CQUNkLG9CQUFDLFlBQUQ7QUFBUSxNQUFBLFdBQVcsTUFBbkI7QUFBb0IsTUFBQSxZQUFZLEVBQUUsQ0FBbEM7QUFBcUMsTUFBQSxLQUFLLEVBQUU7QUFBRUcsUUFBQUEsS0FBSyxFQUFFO0FBQVQ7QUFBNUMsT0FDRSxvQkFBQyxNQUFEO0FBQVEsTUFBQSxLQUFLLEVBQUU7QUFBZiw0QkFERixFQUVFLG9CQUFDLE1BQUQ7QUFBUSxNQUFBLEtBQUssRUFBRTtBQUFmLDRCQUZGLENBRGMsQ0FBaEI7QUFNQSxRQUFJQyxlQUFlLEdBQUcsbUJBQ3BCSixPQUFPLENBQ0pLLElBREgsQ0FDUSxTQURSLEVBRUdDLFFBRkgsR0FHR0MsWUFISCxFQURvQixDQUF0QjtBQU1BTixJQUFBQSxNQUFNLENBQUNHLGVBQWUsQ0FBQ0ksS0FBaEIsR0FBd0JDLE9BQXpCLENBQU4sQ0FBd0NDLElBQXhDLENBQTZDLElBQTdDO0FBQ0FOLElBQUFBLGVBQWUsQ0FDWkMsSUFESCxDQUNRLDBCQURSLEVBRUdNLEVBRkgsQ0FFTSxDQUZOLEVBR0dDLFFBSEgsQ0FHWSxPQUhaO0FBS0FSLElBQUFBLGVBQWUsR0FBRyxtQkFDaEJKLE9BQU8sQ0FDSkssSUFESCxDQUNRLFNBRFIsRUFFR0MsUUFGSCxHQUdHQyxZQUhILEVBRGdCLENBQWxCO0FBTUFOLElBQUFBLE1BQU0sQ0FBQ0QsT0FBTyxDQUFDYSxLQUFSLEdBQWdCQyxLQUFqQixDQUFOLENBQThCSixJQUE5QixDQUFtQyxDQUFuQztBQUNBVCxJQUFBQSxNQUFNLENBQUNHLGVBQWUsQ0FBQ0ksS0FBaEIsR0FBd0JDLE9BQXpCLENBQU4sQ0FBd0NDLElBQXhDLENBQTZDLEtBQTdDO0FBQ0QsR0EzQkMsQ0FBRjtBQTZCQVgsRUFBQUEsRUFBRSxDQUFDLGdCQUFELEVBQW1CLFlBQU07QUFDekIsUUFBTWdCLFFBQVEsR0FBR3BCLElBQUksQ0FBQ3FCLEVBQUwsRUFBakI7QUFDQSxRQUFNaEIsT0FBTyxHQUFHLG1CQUNkLG9CQUFDLFlBQUQ7QUFBUSxNQUFBLElBQUksTUFBWjtBQUFhLE1BQUEsS0FBSyxFQUFFLENBQXBCO0FBQXVCLE1BQUEsS0FBSyxFQUFFO0FBQUVHLFFBQUFBLEtBQUssRUFBRTtBQUFULE9BQTlCO0FBQWtELE1BQUEsUUFBUSxFQUFFWTtBQUE1RCxPQUNFLG9CQUFDLE1BQUQ7QUFBUSxNQUFBLEtBQUssRUFBRTtBQUFmLDRCQURGLEVBRUUsb0JBQUMsTUFBRDtBQUFRLE1BQUEsS0FBSyxFQUFFO0FBQWYsNEJBRkYsQ0FEYyxDQUFoQjtBQU1BLFFBQUlYLGVBQWUsR0FBRyxtQkFDcEJKLE9BQU8sQ0FDSkssSUFESCxDQUNRLFNBRFIsRUFFR0MsUUFGSCxHQUdHQyxZQUhILEVBRG9CLENBQXRCO0FBTUFOLElBQUFBLE1BQU0sQ0FBQ0QsT0FBTyxDQUFDYSxLQUFSLEdBQWdCQyxLQUFqQixDQUFOLENBQThCSixJQUE5QixDQUFtQyxDQUFuQztBQUNBVCxJQUFBQSxNQUFNLENBQUNHLGVBQWUsQ0FBQ0ksS0FBaEIsR0FBd0JDLE9BQXpCLENBQU4sQ0FBd0NDLElBQXhDLENBQTZDLElBQTdDO0FBQ0FOLElBQUFBLGVBQWUsQ0FDWkMsSUFESCxDQUNRLDBCQURSLEVBRUdNLEVBRkgsQ0FFTSxDQUZOLEVBR0dDLFFBSEgsQ0FHWSxPQUhaO0FBS0FSLElBQUFBLGVBQWUsR0FBRyxtQkFDaEJKLE9BQU8sQ0FDSkssSUFESCxDQUNRLFNBRFIsRUFFR0MsUUFGSCxHQUdHQyxZQUhILEVBRGdCLENBQWxCO0FBTUFOLElBQUFBLE1BQU0sQ0FBQ0QsT0FBTyxDQUFDYSxLQUFSLEdBQWdCQyxLQUFqQixDQUFOLENBQThCSixJQUE5QixDQUFtQyxDQUFuQztBQUNBVCxJQUFBQSxNQUFNLENBQUNHLGVBQWUsQ0FBQ0ksS0FBaEIsR0FBd0JDLE9BQXpCLENBQU4sQ0FBd0NDLElBQXhDLENBQTZDLElBQTdDO0FBQ0QsR0E3QkMsQ0FBRjtBQW9GRCxDQXZJTyxDQUFSIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgKi9cbi8vIEB0cy1ub2NoZWNrXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgbW91bnQgfSBmcm9tIFwiZW56eW1lXCJcbmltcG9ydCBTZWxlY3QgZnJvbSBcIi4uXCJcbmltcG9ydCB7IGFjdCB9IGZyb20gXCJyZWFjdC1kb20vdGVzdC11dGlsc1wiXG5cbmNvbnN0IHsgT3B0aW9uIH0gPSBTZWxlY3RcblxuZXhwb3J0IGludGVyZmFjZSBJRWxlbWVudFByb3RvIHtcbiAgW2tleTogc3RyaW5nXTogYW55XG59XG5cbmRlc2NyaWJlKFwiU2VsZWN0XCIsICgpID0+IHtcbiAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgamVzdC51c2VGYWtlVGltZXJzKClcblxuICAgIC8qKlxuICAgICAqIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS80MDAwNjY2M1xuICAgICAqIOmAmui/hyBtb2NrIGBnZXRQb3B1cERPTU5vZGVg77yM5LmL5ZCO6L+Q6KGM55qE5omA5pyJIGBnZXRQb3B1cERPTU5vZGVgIOmDveS8mui/lOWbnui/meWQjOS4gOS4quWAvOOAglxuICAgICAqL1xuICAgIC8vIEVsZW1lbnQucHJvdG90eXBlLmdldFBvcHVwRE9NTm9kZSA9IGplc3QuZm4oKCkgPT4ge1xuICAgIC8vIHJldHVybiBcImFzZFwiXG4gICAgLy8gfSlcbiAgfSlcblxuICBhZnRlckVhY2goKCkgPT4ge1xuICAgIGplc3QudXNlUmVhbFRpbWVycygpXG4gIH0pXG5cbiAgaXQoXCJTZWxlY3Qg5piv5ZCm5q2j56Gu5riy5p+TXCIsICgpID0+IHtcbiAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoPFNlbGVjdCAvPilcbiAgICBleHBlY3Qod3JhcHBlcikudG9NYXRjaFNuYXBzaG90KClcbiAgfSlcblxuICBpdChcIlNlbGVjdCDmmK/lkKbog73lhoXpg6jpqbHliqhcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudChcbiAgICAgIDxTZWxlY3QgZGVmYXVsdE9wZW4gZGVmYXVsdFZhbHVlPXsyfSBzdHlsZT17eyB3aWR0aDogXCIxMjBweFwiIH19PlxuICAgICAgICA8T3B0aW9uIHZhbHVlPXsxfT7mnIvlj4vlnIg8L09wdGlvbj5cbiAgICAgICAgPE9wdGlvbiB2YWx1ZT17Mn0+5YWs5LyX5Y+3PC9PcHRpb24+XG4gICAgICA8L1NlbGVjdD5cbiAgICApXG4gICAgbGV0IGRyb3Bkb3duV3JhcHBlciA9IG1vdW50KFxuICAgICAgd3JhcHBlclxuICAgICAgICAuZmluZChcIlRyaWdnZXJcIilcbiAgICAgICAgLmluc3RhbmNlKClcbiAgICAgICAgLmdldENvbXBvbmVudCgpXG4gICAgKVxuICAgIGV4cGVjdChkcm9wZG93bldyYXBwZXIucHJvcHMoKS52aXNpYmxlKS50b0JlKHRydWUpXG4gICAgZHJvcGRvd25XcmFwcGVyXG4gICAgICAuZmluZChcIi5hZHVpLXNlbGVjdC1pdGVtLW9wdGlvblwiKVxuICAgICAgLmF0KDApXG4gICAgICAuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIC8vIOmcgOimgemHjeaWsOiOt+WPllxuICAgIGRyb3Bkb3duV3JhcHBlciA9IG1vdW50KFxuICAgICAgd3JhcHBlclxuICAgICAgICAuZmluZChcIlRyaWdnZXJcIilcbiAgICAgICAgLmluc3RhbmNlKClcbiAgICAgICAgLmdldENvbXBvbmVudCgpXG4gICAgKVxuICAgIGV4cGVjdCh3cmFwcGVyLnN0YXRlKCkudmFsdWUpLnRvQmUoMSlcbiAgICBleHBlY3QoZHJvcGRvd25XcmFwcGVyLnByb3BzKCkudmlzaWJsZSkudG9CZShmYWxzZSlcbiAgfSlcblxuICBpdChcIlNlbGVjdCDmmK/lkKblj5flpJbpg6jmjqfliLZcIiwgKCkgPT4ge1xuICAgIGNvbnN0IG9uU2VsZWN0ID0gamVzdC5mbigpXG4gICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KFxuICAgICAgPFNlbGVjdCBvcGVuIHZhbHVlPXsyfSBzdHlsZT17eyB3aWR0aDogXCIxMjBweFwiIH19IG9uU2VsZWN0PXtvblNlbGVjdH0+XG4gICAgICAgIDxPcHRpb24gdmFsdWU9ezF9Puaci+WPi+WciDwvT3B0aW9uPlxuICAgICAgICA8T3B0aW9uIHZhbHVlPXsyfT7lhazkvJflj7c8L09wdGlvbj5cbiAgICAgIDwvU2VsZWN0PlxuICAgIClcbiAgICBsZXQgZHJvcGRvd25XcmFwcGVyID0gbW91bnQoXG4gICAgICB3cmFwcGVyXG4gICAgICAgIC5maW5kKFwiVHJpZ2dlclwiKVxuICAgICAgICAuaW5zdGFuY2UoKVxuICAgICAgICAuZ2V0Q29tcG9uZW50KClcbiAgICApXG4gICAgZXhwZWN0KHdyYXBwZXIuc3RhdGUoKS52YWx1ZSkudG9CZSgyKVxuICAgIGV4cGVjdChkcm9wZG93bldyYXBwZXIucHJvcHMoKS52aXNpYmxlKS50b0JlKHRydWUpXG4gICAgZHJvcGRvd25XcmFwcGVyXG4gICAgICAuZmluZChcIi5hZHVpLXNlbGVjdC1pdGVtLW9wdGlvblwiKVxuICAgICAgLmF0KDApXG4gICAgICAuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIC8vIOmcgOimgemHjeaWsOiOt+WPllxuICAgIGRyb3Bkb3duV3JhcHBlciA9IG1vdW50KFxuICAgICAgd3JhcHBlclxuICAgICAgICAuZmluZChcIlRyaWdnZXJcIilcbiAgICAgICAgLmluc3RhbmNlKClcbiAgICAgICAgLmdldENvbXBvbmVudCgpXG4gICAgKVxuICAgIGV4cGVjdCh3cmFwcGVyLnN0YXRlKCkudmFsdWUpLnRvQmUoMilcbiAgICBleHBlY3QoZHJvcGRvd25XcmFwcGVyLnByb3BzKCkudmlzaWJsZSkudG9CZSh0cnVlKVxuICB9KVxuXG4gIC8vIGl0KFwi5bCB6KOF55qE5pCc57Si5piv5ZCm5Y+v55SoXCIsICgpID0+IHtcbiAgLy8gICBkb2N1bWVudC5ib2R5LmlubmVySFRNTCA9ICc8ZGl2IGlkPVwibW91bnRlclwiIC8+J1xuICAvLyAgIGNvbnN0IG9uU2VsZWN0ID0gamVzdC5mbigpXG4gIC8vICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KFxuICAvLyAgICAgPFNlbGVjdFxuICAvLyAgICAgICBvcGVuXG4gIC8vICAgICAgIHZhbHVlPXtudWxsfVxuICAvLyAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMjBweFwiIH19XG4gIC8vICAgICAgIG9uU2VsZWN0PXtvblNlbGVjdH1cbiAgLy8gICAgICAgc2VhcmNoYWJsZVxuICAvLyAgICAgPlxuICAvLyAgICAgICA8T3B0aW9uIHZhbHVlPXsxfT5wZW5neW91cXVhbjwvT3B0aW9uPlxuICAvLyAgICAgICA8T3B0aW9uIHZhbHVlPXsyfT5nb25nemhvbmdoYW88L09wdGlvbj5cbiAgLy8gICAgIDwvU2VsZWN0PixcbiAgLy8gICAgIHsgYXR0YWNoVG86IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW91bnRlclwiKSB9XG4gIC8vICAgKVxuICAvLyAgIGxldCBkcm9wZG93bldyYXBwZXIgPSBtb3VudChcbiAgLy8gICAgIHdyYXBwZXJcbiAgLy8gICAgICAgLmZpbmQoXCJUcmlnZ2VyXCIpXG4gIC8vICAgICAgIC5pbnN0YW5jZSgpXG4gIC8vICAgICAgIC5nZXRDb21wb25lbnQoKVxuICAvLyAgIClcbiAgLy8gICBjb25zdCBpbnB1dCA9IGRyb3Bkb3duV3JhcHBlci5maW5kKFwiaW5wdXRcIilcbiAgLy8gICBhY3QoKCkgPT4ge1xuICAvLyAgICAgaW5wdXQuc2ltdWxhdGUoXCJtb3VzZWRvd25cIilcbiAgLy8gICAgIGlucHV0LnNpbXVsYXRlKFwibW91c2V1cFwiKVxuICAvLyAgICAgaW5wdXQuc2ltdWxhdGUoXCJrZXlkb3duXCIsIHsga2V5OiBcInpcIiwga2V5Q29kZTogOTAgfSlcbiAgLy8gICAgIGlucHV0LnNpbXVsYXRlKFwiY2hhbmdlXCIsIHsgdGFyZ2V0OiB7IHZhbHVlOiBcInpcIiB9IH0pXG4gIC8vICAgICAvKipcbiAgLy8gICAgICAqIHJ1bkFsbFRpbWVycyDmtYvor5UgU2VsZWN0LnByZXZlbnRWaXNpYmxlQ2hhbmdlXG4gIC8vICAgICAgKi9cbiAgLy8gICAgIGplc3QucnVuQWxsVGltZXJzKClcbiAgLy8gICAgIHdyYXBwZXIudXBkYXRlKClcbiAgLy8gICAgIC8vIOmcgOimgemHjeaWsOiOt+WPllxuICAvLyAgICAgZHJvcGRvd25XcmFwcGVyID0gbW91bnQoXG4gIC8vICAgICAgIHdyYXBwZXJcbiAgLy8gICAgICAgICAuZmluZChcIlRyaWdnZXJcIilcbiAgLy8gICAgICAgICAuaW5zdGFuY2UoKVxuICAvLyAgICAgICAgIC5nZXRDb21wb25lbnQoKVxuICAvLyAgICAgKVxuICAvLyAgICAgY29uc29sZS5sb2coZHJvcGRvd25XcmFwcGVyLmZpbmQoXCJpbnB1dFwiKS5hdCgwKS5wcm9wcygpLCBcInlpamllXCIpXG4gIC8vICAgICBleHBlY3QoXG4gIC8vICAgICAgIGRyb3Bkb3duV3JhcHBlclxuICAvLyAgICAgICAgIC5maW5kKFwiLmFkdWktc2VsZWN0LWl0ZW0tb3B0aW9uXCIpXG4gIC8vICAgICAgICAgLmF0KDApXG4gIC8vICAgICAgICAgLnRleHQoKVxuICAvLyAgICAgKS50b0JlKFwiZ29uZ3pob25naGFvXCIpXG4gIC8vICAgICBkcm9wZG93bldyYXBwZXJcbiAgLy8gICAgICAgLmZpbmQoXCIuYWR1aS1zZWxlY3QtaXRlbS1vcHRpb25cIilcbiAgLy8gICAgICAgLmF0KDApXG4gIC8vICAgICAgIC5zaW11bGF0ZShcImNsaWNrXCIpXG4gIC8vICAgfSlcbiAgLy8gfSlcbn0pXG4iXX0=