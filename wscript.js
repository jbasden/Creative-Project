var app = new Vue({
  el: '#app',
  data: {
    parks: [],
    message: '',
    show: 'all',
    drag: {},
  },
  computed: {
    /*
    activeparks: function() {
      return this.parks.filter(function(item) {
        return !item.completed;
      });
    },*/
    filteredparks: function() {
      if (this.show === 'ones')
      return this.parks.filter(function(item) {
        return item.one;
      });
      if (this.show === 'twos')
      return this.parks.filter(function(item) {
        return item.two;
      });
      if (this.show === 'threes')
      return this.parks.filter(function(item) {
        return item.three;
      });
      if (this.show === 'fours')
      return this.parks.filter(function(item) {
        return item.four;
      });
      if (this.show === 'fives')
      return this.parks.filter(function(item) {
        return item.five;
      });      /*
      if (this.show === 'active')
      return this.parks.filter(function(item) {
        return !item.completed;display
      });
      if (this.show === 'completed')
      return this.parks.filter(function(item) {
        return item.completed;
      });*/
      return this.parks;
    },
  },
  methods: {
    InitParks: function() {
      var teton = {text: "Grand Teton National Park",one:false,two:false,three:false,four:false,five:false};
      var yellowstone = {text: "Yellowstone National Park",one:false,two:false,three:false,four:false,five:false};
      var crater = {text: "Crater Lake National Park",one:false,two:false,three:false,four:false,five:false};
      var sequoia = {text: "Sequoia National Park",one:false,two:false,three:false,four:false,five:false};
      var lassen = {text: "Lassen Volcanic National Park",one:false,two:false,three:false,four:false,five:false};
      var redwood = {text: "Redwood National Park",one:false,two:false,three:false,four:false,five:false};
      var cascades = {text: "North Cascades National Park",one:false,two:false,three:false,four:false,five:false};
      var glacier = {text: "Glacier National Park",one:false,two:false,three:false,four:false,five:false};
      var arches = {text: "Arches National Park",one:false,two:false,three:false,four:false,five:false};
      this.parks = [teton,yellowstone,crater,sequoia,lassen,redwood,cascades,glacier,arches];
    },
    CheckOne(item) {
      item.one = true;
      item.two = false;
      item.three = false;
      item.four = false;
      item.five = false;
    },
    CheckTwo(item) {
      item.one = false;
      item.two = true;
      item.three = false;
      item.four = false;
      item.five = false;
    },
    CheckThree(item) {
      item.one = false;
      item.two = false;
      item.three = true;
      item.four = false;
      item.five = false;
    },
    CheckFour(item) {
      item.one = false;
      item.two = false;
      item.three = false;
      item.four = true;
      item.five = false;
    },
    CheckFive(item) {
      item.one = false;
      item.two = false;
      item.three = false;
      item.four = false;
      item.five = true;
    },
    addItem: function() {
      this.parks.push({text: this.message,one:false,two:false,three:false,four:false,five:false});
      this.message = '';
    },
    /*
    completeItem: function(park) {
      park.completed = !park.completed;
    },*/
    deleteItem: function(item) {
      var index = this.parks.indexOf(item);
      if (index > -1)
      this.parks.splice(index,1);
    },
    showOnes: function() {
      this.show = 'ones';
    },
    showTwos: function() {
      this.show = 'twos';
    },
    showThrees: function() {
      this.show = 'threes';
    },
    showFours: function() {
      this.show = 'fours';
    },
    showFives: function() {
      this.show = 'fives';
    },
    showAll: function() {
      this.show = 'all';
    },
    /*
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
    },*/
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
