import { shallowMount } from "@vue/test-utils";
import FormCharacteristics from "@/components/FormCharacteristics";

describe("FormCaracteristics", () => {
  describe("defaults", () => {
    let wrapper = shallowMount(FormCharacteristics);

    test("should render a 'no points message'", () => {
      expect(wrapper.find("#no-points-message").text()).toEqual(
        "No tienes puntos a repartir"
      );
    });

    test("should be all characteristics default values of 0", () => {
      expect(wrapper.vm.characteristics.strength).toBe(0);
      expect(wrapper.vm.characteristics.dexterity).toBe(0);
      expect(wrapper.vm.characteristics.agility).toBe(0);
      expect(wrapper.vm.characteristics.physique).toBe(0);
      expect(wrapper.vm.characteristics.intelligence).toBe(0);
      expect(wrapper.vm.characteristics.might).toBe(0);
      expect(wrapper.vm.characteristics.will).toBe(0);
      expect(wrapper.vm.characteristics.perception).toBe(0);
    });

    test("should be all points defalt to 0 / [] '' ", () => {
      expect(wrapper.vm.points.type).toBe("");
      expect(wrapper.vm.points.values).toEqual([]);
      expect(wrapper.vm.points.total).toBe(0);
    });

    test("pointsRemaind, should be 0", () => {
      expect(wrapper.vm.pointsRemaind).toBe(0);
    });
  });

  describe("Behavior when pass 'NaNhuman' seed  to props", () => {
    let wrapper = shallowMount(FormCharacteristics, {
      propsData: {
        points: {
          type: "ADVANTAGE",
          values: [5, 9, 7, 9, 9, 5, 4, 4],
          total: 52
        }
      }
    });

    test("Props must set property", () => {
      expect(wrapper.vm.points).toEqual({
        type: "ADVANTAGE",
        values: [5, 9, 7, 9, 9, 5, 4, 4],
        total: 52
      });
    });

    test("Points remains must be 52 ", () => {
      expect(wrapper.vm.pointsRemaind).toBe(52);
    });

    test("sould not render a 'no points message' ", () => {
      expect(wrapper.find("#no-points-message").exists()).toBe(false);
    });
  });
});
