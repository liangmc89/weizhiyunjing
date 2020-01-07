// import something here
import countTo from 'vue-count-to';
// "async" is optional
export default async ({
  Vue
}) => {
  // something to do
  Vue.component('countTo', {
    ...countTo
  })
}
