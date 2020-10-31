Assume you are given two APIs List<Person> getFriends(Person); and List<Order> getOrders(Person);. Design a feature like Amazon's recommendation system, except fill it with orders of a person's friends.
Now what if multiple people ordered the same thing, and we want to return the orders from most purchased to least purchased?
Now what if someone purchased multiple of the same item and we only want one copy of that counted?
Now what if we want to extend this to friends of friends?

System design: a newspaper portal
