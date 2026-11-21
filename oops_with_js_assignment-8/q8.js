function show(message) {
    document.getElementById("output").textContent += message + "\n";
}

class MovieTicket {
    constructor(movieName, seatNo, price) {
        this.movieName = movieName;
        this.seatNo = seatNo;
        this.price = price;
    }
}

MovieTicket.prototype.printTicket = function() {
    return "Movie: " + this.movieName + ", Seat: " + this.seatNo +
        ", Ticket price: Rs. " + this.price;
};

class OnlineTicket extends MovieTicket {
    constructor(movieName, seatNo, price, convenienceFee) {
        super(movieName, seatNo, price);
        this.convenienceFee = convenienceFee;
    }

    getTotalAmount() {
        return this.price + this.convenienceFee;
    }
}

let ticket1 = new OnlineTicket("Dangal", "A10", 200, 30);
let ticket2 = new OnlineTicket("3 Idiots", "B05", 250, 40);

show(ticket1.printTicket());
show("Convenience fee: Rs. " + ticket1.convenienceFee);
show("Total amount: Rs. " + ticket1.getTotalAmount());
show(ticket2.printTicket());
show("Total amount: Rs. " + ticket2.getTotalAmount());
show("Prototype chain: OnlineTicket objects can use printTicket() from MovieTicket.prototype.");
