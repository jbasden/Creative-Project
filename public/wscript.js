var app = new Vue({
  el: '#app',
  data: {
    parks: [],
    message: '',
    show: 'all',
    drag: {},
  },
  created: function() {
    this.getParks();
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
    getParks: function() {
      axios.get("/api/parks").then(response => {
        this.parks = response.data;
        return true;
      }).catch(err => {
      });
    },
    InitParks: function() {
      this.message = "Grand Teton National Park";
      this.addPark();
      this.message = "Yellowstone National Park";
      this.addPark();
      this.message = "Crater Lake National Park";
      this.addPark();
      this.message = "Sequoia National Park";
      this.addPark();
      this.message = "Lassen Volcanic National Park";
      this.addPark();
      this.message = "Redwood National Park";
      this.addPark();
      this.message = "North Cascades National Park";
      this.addPark();
      this.message = "Glacier National Park";
      this.addPark();
      this.message = "Arches National Park";
    },
    CheckOne(park) {
      axios.put("/api/parks/" + park.id, {
        message: park.message,
        one: !park.one,
        two: false,
        three: false,
        four: false,
        five: false
      }).then(response => {
        this.getParks();
        return true;
      }).catch(err => {
      });
    },
    CheckTwo(park) {
      axios.put("/api/parks/" + park.id, {
        message: park.message,
        one: false,
        two: !park.two,
        three: false,
        four: false,
        five: false
      }).then(response => {
        this.getParks();
        return true;
      }).catch(err => {
      });
    },
    CheckThree(park) {
      axios.put("/api/parks/" + park.id, {
        message: park.message,
        one: false,
        two: false,
        three: !park.three,
        four: false,
        five: false
      }).then(response => {
        this.getParks();
        return true;
      }).catch(err => {
      });
    },
    CheckFour(park) {
      axios.put("/api/parks/" + park.id, {
        message: park.message,
        one: false,
        two: false,
        three: false,
        four: !park.four,
        five: false
      }).then(response => {
        this.getParks();
        return true;
      }).catch(err => {
      });
    },
    CheckFive(park) {
      axios.put("/api/parks/" + park.id, {
        message: park.message,
        one: false,
        two: false,
        three: false,
        four: false,
        five: !park.five
      }).then(response => {
        this.getParks();
        return true;
      }).catch(err => {
      });
    },
    addPark: function() {
      axios.post('/api/parks', {
        message: this.message,
        one:false,
        two:false,
        three:false,
        four:false,
        five:false
      }).then(response => {
        this.message = '';
        this.getParks();
        return true;
      }).catch(err => {
      });
    },
    deletePark: function(park) {
      axios.delete('/api/parks/' + park.id).then(response => {
        this.getParks();
        return true;
      }).catch(err => {
      });
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
    dragItem: function(park) {
      this.drag = park;
    },
    dropItem: function(park) {
      axios.put('/api/parks/' + this.drag.id, {
        message: this.drag.message,
        one: this.drag.one,
        two: this.drag.two,
        three: this.drag.three,
        four: this.drag.four,
        five: this.drag.five,
        orderChange:true,
        orderTarget: park.id
      }).then(response => {
        this.getParks();
        return true;
      }).catch(err => {
      });
    },
  }
});
