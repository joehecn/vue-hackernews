import { shallowMount } from '@vue/test-utils'
import Item from '../Item.vue'

describe('Item.vue', () => {
  test('sanity test', () => {
    expect(true).toBe(true)
  })

  test('not run after 100ms', () => {
    // runner.start()
    setTimeout(() => {
      expect(false).toBe(true)
    }, 100)
  })

  test('renders "item"', () => {
    // const Ctor = Vue.extend(Item)
    // const vm = new Ctor().$mount()
    // console.log(vm.$el.textContent)
    // expect(vm.$el.textContent).toContain('item')

    const wrapper = shallowMount(Item)

    expect(wrapper.text()).toContain('item')
  })
})
