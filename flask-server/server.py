from flask import Flask

app = Flask(__name__);

#Articles API Route

@app.route('/articles')
def articles():
    return{"articles":[{
      "title": "Totaled Tesla goes up in flames three weeks after crash",
      "description": "A totaled Tesla Model S burst into flames in a Sacramento junkyard earlier this month, causing a fire that took \"a significant amount of time, water, and thinking outside the box to extinguish,\" firefighters said. The vehicle was involved in a comparably",
      "publishedAt": "2022-06-23",
      "imageUrl": "https://images.unsplash.com/photo-1655635643486-a17bc48771ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
      "content": "Skip to comments.\r\nTotaled Tesla goes up in flames three weeks after crashThe Register ^Posted on 06/24/2022 7:35:14 AM PDT by FarCenter\r\nA totaled Tesla Model S burst into flames in a Sacramento jun… [+2030 chars]",
      "tags": "tesla,ai"
    },
    {
        "title": "Polestar set to become latest electric vehicle maker to go public via SPAC merger - CNBC",
        "description": "Polestar set to become latest electric vehicle maker to go public via SPAC mergerCNBC Polestar Makes a Move to Take On TeslaTheStreet Polestar and Gores Guggenheim, Inc. Announce Closing of Business CombinationYahoo Finance EV Manufacturer Polestar Gets the",
        "publishedAt": "2022-06-24",
        "imageUrl": "https://images.unsplash.com/photo-1623572435912-9940866dca4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGVsZWN0cmljJTIwY2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        "content": "The Fine Print: The following comments are owned by whoever posted them. We are not responsible for them in any way.",
        "tags": "electric,transportation"
    }]}

if __name__ == "__main__":
    app.run(debug=True)