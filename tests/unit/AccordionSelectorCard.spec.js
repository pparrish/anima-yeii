import { shallowMount } from "@vue/test-utils";
import AccordionSelectorCard from "@/components/AccordionSelectorCard";

describe("AccordionSelectorCard.vue", () => {
  let cmp;

  beforeEach(() => {
    cmp = shallowMount(AccordionSelectorCard);
  });

  it("has the expected html structure", () => {
    expect(cmp.vm.$el).toMatchSnapshot();
  });

  describe("All default values is set default correctly", () => {
    it("default title must be 'No title'", () => {
      expect(cmp.vm.title).toEqual("No title");
    });
    it("default tagg must be []", () => {
      expect(cmp.vm.tags).toEqual([]);
    });
    it("default content must be 'No content'", () => {
      expect(cmp.vm.content).toEqual("No content");
    });
    it("default title must be 'No text'", () => {
      expect(cmp.vm.buttonText).toEqual("No text");
    });
  });

  describe("Props must be  set correctly", () => {
    it("Title must be 'Selector Card'", () => {
      cmp = shallowMount(AccordionSelectorCard, {
        propsData: {
          title: "Selector Card"
        }
      });

      expect(cmp.vm.title).toBe("Selector Card");
    });

    it("tags must be ['tag', 'a tag']", () => {
      cmp = shallowMount(AccordionSelectorCard, {
        propsData: {
          tags: ["tag", "a tag"]
        }
      });

      expect(cmp.vm.tags).toEqual(["tag", "a tag"]);
    });

    it("content must be 'A content'", () => {
      cmp = shallowMount(AccordionSelectorCard, {
        propsData: {
          content: "A content"
        }
      });

      expect(cmp.vm.content).toEqual("A content");
    });

    it("Button must be say 'Select me'", () => {
      cmp = shallowMount(AccordionSelectorCard, {
        propsData: {
          buttonText: "Select me"
        }
      });

      expect(cmp.vm.buttonText).toEqual("Select me");
    });

    it("Haz the espected structure", () => {
      expect(cmp.vm.$el).toMatchSnapshot();
    });
  });
});
