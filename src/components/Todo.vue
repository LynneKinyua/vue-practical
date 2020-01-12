<template>

  <div class="container">
    <div class="header">
      <h1> My Todo List</h1>
    </div>
    <p> Habitant morbi tristique senectus et netus et. Sed libero enim sed faucibus turpis in eu mi bibendum. Faucibus a pellentesque sit amet porttitor eget. Tempus egestas sed sed risus pretium quam vulputate. Iaculis eu non diam phasellus. </p>
    <div class="holder">

      <form v-on:submit.prevent="addTodo">
        <input type="text" placeholder="Enter a task you will do today.." v-model="Todo"
        v-validate="'min:8'" name="Todo">
        <p class="alert" v-if="errors.has('Todo')">{{ errors.first('Todo') }}</p>
      </form>

      <ul>
        <li v-for="(data, index) in todo" :key='index'>{{data.todo}}</li>
      </ul>

      <p>These are the things I should do Today.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Todo',
  data() {
    return {
      todo: [
        { "todo": "Client Retention Analysis"},
        {"todo": "Inactive Clients SMS"},
        {"todo": "Learn JSON"},
        {"todo": "Book Swvl for Monday"}
      ]
    }
  },
  methods: {
    addTodo() {
      this.todo.push({todo: this.todo})
      this.todo= '';
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .holder {
    background: rgb(241, 217, 217);

  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  
  ul li {
    padding: 20px;
    font-size: 1.3em;
    background-color: #E0EDF4;
    border-left: 5px solid #3EB3F6;
    margin-bottom: 2px;
    color:rgb(12, 12, 12);
    
  }

  p {
    text-align:left;
    padding: 30px 0;
    color:rgb(19, 18, 18);
  }

  .container {
    box-shadow: 0px 0px 40px rgb(240, 231, 231);
  }

  input {
    width: calc(100% - 40px);
    border: 0;
    padding: 20px;
    font-size: 1.3em;
    background-color: #00203FFF;
    color: #ADEFD1FF;
  }

  .alert {
    background: #e9c655;
    font-weight: bold;
    display: inline-block;
    padding: 5px;
    margin-top: -20px;
  }
 

</style>