import Vue from "vue";
import AccordionSelectorCard from "@/components/AccordionSelectorCard";

describe("AccordionSelectorCard.vue", () => {
  let cmp, vm;
  beforeEach(() => {
    cmp = Vue.extend(AccordionSelectorCard); //CReate a copy or original component
    vm = new cmp({}).$mount(); //if you whant remplase data with fake and mount
  });
  describe("All default values is set correctly", () => {
    it("default title must be 'No title'", () => {
      expect(vm.title).toEqual("No title");
    });
    it("default tagg must be []", () => {
      expect(vm.tags).toEqual([]);
    });
    it("default content must be 'No content'", () => {
      expect(vm.content).toEqual("No content");
    });
    it("default title must be 'No text'", () => {
      expect(vm.buttonText).toEqual("No text");
    });
  });
});
