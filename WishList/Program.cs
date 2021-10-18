using System;
using System.Collections.Generic;

System.Console.WriteLine("My wish list: \n");

List<Wish> GetWishes()
{
    List<Wish> wishes = new List<Wish> {
        new Wish {
            Label = "An original eight track of William Shatner's 'Lucy in the Sky with Diamonds'"
        },
        new Wish {
            Label = "An original eight track of William Shatner's 'Lucy in the Sky with Diamonds'"
        },
        new Wish {
            Label = "An original eight track of William Shatner's 'Lucy in the Sky with Diamonds'"
        }
    };
    return wishes;
}

List<Wish> myWishes = GetWishes();

foreach(Wish myWish in myWishes)
{
    System.Console.WriteLine(myWish.Label);
}

public class Wish
{
    public string Label { get; set; }
}