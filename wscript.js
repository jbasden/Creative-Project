var app = new Vue({
  el: '#app',
  data: {
    parks: [],
    message: '',
    show: 'all',
    drag: {},
  },
  computed: {
    activeparks: function() {
      return this.parks.filter(function(item) {
        return !item.completed;
      });
    },
    filteredparks: function() {
      if (this.show === 'active')
      return this.parks.filter(function(item) {
        return !item.completed;
      });
      if (this.show === 'completed')
      return this.parks.filter(function(item) {
        return item.completed;
      });
      return this.parks;
    },
  },
  methods: {
    InitParks: function() {
      var teton = {text: "Grand Teton National Park",rating:3};
      var yellowstone = {text: "Yellowstone National Park",rating:3};
      var crater = {text: "Crater Lake National Park",rating:3};
      var sequoia = {text: "Sequoia National Park",rating:3};
      var lassen = {text: "Lassen Volcanic National Park",rating:3};
      var redwood = {text: "Redwood National Park",rating:3};
      var cascades = {text: "North Cascades National Park",rating:3};
      var glacier = {text: "Glacier National Park",rating:3};
      var arches = {text: "Arches National Park",rating:3};
      this.parks = [teton,yellowstone,crater,sequoia,lassen,redwood,cascades,glacier,arches];
    },
    addItem: function() {
      this.parks.push({text: this.message,rating:3});
      this.message = '';
    },
    completeItem: function(park) {
      park.completed = !park.completed;
    },
    deleteItem: function(item) {
      var index = this.parks.indexOf(item);
      if (index > -1)
      this.parks.splice(index,1);
    },
    showAll: function() {
      this.show = 'all';
    },
    showActive: function() {
      this.show = 'active';
    },
    showCompleted: function() {
      this.show = 'completed';
    },
    deleteCompleted: function() {
      this.parks = this.parks.filter(function(item) {
        return !item.completed;
      });
    },
    dragItem: function(item) {
      this.drag = item;
    },
    dropItem: function(item) {
      var indexItem = this.parks.indexOf(this.drag);
      var indexTarget = this.parks.indexOf(item);
      this.parks.splice(indexItem,1);
      this.parks.splice(indexTarget,0,this.drag);
    },
  }
});
