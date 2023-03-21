import React from 'react';

let movieArray = [
    { 
    title: "Cocaine Bear", 
    posterURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2//gOnmaxHo0412UVr1QM5Nekv1xPi.jpg", 
    releaseDate: 2023-02-22, 
    overview: "Inspired by a true story, an oddball group of cops, criminals, tourists and teens converge in a Georgia forest where a 500-pound black bear goes on a murderous rampage after unintentionally ingesting cocaine.", 
    rating: 6.6 
},
{ 
    title: "Blow", 
    posterURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2//yYZFVfk8aeMP4GxBSU9MTvqs9mJ.jpg", releaseDate: 2001-04-04, 
    overview: "A boy named George Jung grows up in a struggling family in the 1950's. His mother nags at her husband as he is trying to make a living for the family. It is finally revealed that George's father cannot make a living and the family goes bankrupt. George does not want the same thing to happen to him, and his friend Tuna, in the 1960's, suggests that he deal marijuana. He is a big hit in California in the 1960's, yet he goes to jail, where he finds out about the wonders of cocaine. As a result, when released, he gets rich by bringing cocaine to America. However, he soon pays the price.", 
    rating: 7.4 
},
{ 
    title: "American Made", 
    posterURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2//23ILgoPSO5ShKcTZOuiTVfqFAUB.jpg", releaseDate: 2017-08-18, 
    overview: "The true story of pilot Barry Seal, who transported contraband for the CIA and the Medellin cartel in the 1980s.", 
    rating: 6.8 
},
{ 
    title: "Fear and Loathing in Las Vegas", 
    posterURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2//gFo5UrXQaVDQ9Vc1mmsWZNRt2aQ.jpg", releaseDate: 1998-05-22, 
    overview: "Raoul Duke and his attorney Dr. Gonzo drive a red convertible across the Mojave desert to Las Vegas with a suitcase full of drugs to cover a motorcycle race. As their consumption of drugs increases at an alarming rate, the stoned duo trash their hotel room and fear legal repercussions. Duke begins to drive back to L.A., but after an odd run-in with a cop, he returns to Sin City and continues his wild drug binge.", 
    rating: 7.2 
},
{ 
    title: "Jacob's Ladder", 
    posterURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2//4GY4FsM0ZOtbSTeMpY0g4WkEuBW.jpg", releaseDate: 1990-11-02, 
    overview: "After returning home from the Vietnam War, veteran Jacob Singer struggles to maintain his sanity. Plagued by hallucinations and flashbacks, Singer rapidly falls apart as the world and people around him morph and twist into disturbing images. His girlfriend, Jezzie, and ex-wife, Sarah, try to help, but to little avail. Even Singer's chiropractor friend, Louis, fails to reach him as he descends into madness.", 
    rating: 7.4 
},
{ 
    title: "Reefer Madness: The Movie Musical", 
    posterURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2//oXFqawh6iNzYJ9VsQcZmuaj0AAa.jpg", releaseDate: 2006-03-29, 
    overview: "This film tells the tale of the Harper Affair, in which young Jimmy Harper finds his life of promise turn into a life of debauchery and murder thanks to the new drug menace marijuana. Along the way he receives help from his girlfriend Mary and Jesus himself, but always finds himself in the arms of the Reefer Man and the rest of the denizens of the Reefer Den.", 
    rating: 6.7 
},
{ 
    title: "Scarface", 
    posterURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2//iQ5ztdjvteGeboxtmRdXEChJOHh.jpg", releaseDate: 1983-12-09, 
    overview: "After getting a green card in exchange for assassinating a Cuban government official, Tony Montana stakes a claim on the drug trade in Miami. Viciously murdering anyone who stands in his way, Tony eventually becomes the biggest drug lord in the state, controlling nearly all the cocaine that comes through Miami. But increased pressure from the police, wars with Colombian drug cartels and his own drug-fueled paranoia serve to fuel the flames of his eventual downfall.", rating: 8.2 
},
{ 
    title: "Traffic", 
    posterURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2//jbccmnqE4oAPI67bApgt2JiRPz8.jpg", releaseDate: 2000-03-23, 
    overview: "An exploration of the United States of America's war on drugs from multiple perspectives. For the new head of the Office of National Drug Control Policy, the war becomes personal when he discovers his well-educated daughter is abusing cocaine within their comfortable suburban home. In Mexico, a flawed, but noble policeman agrees to testify against a powerful general in league with a cartel, and in San Diego, a drug kingpin's sheltered trophy wife must learn her husband's ruthless business after he is arrested, endangering her luxurious lifestyle.", rating: 7.1 
},
{ 
    title: "Cheech & Chong's Next Movie", 
    posterURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2//hetHB9L84jOLxajKZLKgaNBRDJ9.jpg", releaseDate: 1980-07-18, 
    overview: "Perennially stoned Cheech and Chong tear through the city of Los Angeles, causing trouble wherever they go. After Cheech loses his job, the two pot enthusiasts head to the welfare offices where Cheech's girlfriend, Donna, works. Instead of collecting unemployment, they find themselves thrown back on the streets, searching for a way to earn new income. But when Cheech's cousin, \"Red\" Mendoza, arrives, things get even crazier.", 
    rating: 6 
},
{ 
    title: "Up in Smoke", 
    posterURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2//lKXINU3ApbhFPQJ3pqgMzGPCYnH.jpg", releaseDate: 1978-05-16, 
    overview: "An unemployed pot-smoking slacker and amateur drummer, Anthony Stoner ditches his strict parents and hits the road, eventually meeting kindred spirit Pedro de Pacas. While the drug-ingesting duo is soon arrested for possession of marijuana, Anthony and Pedro get released on a technicality, allowing them to continue their many misadventures and ultimately compete in a rock band contest, where they perform the raucous tune \"Earache My Eye.\"", 
    rating: 6.7 
},
{ 
    title: "Training Day", 
    posterURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2//bUeiwBQdupBLQthMCHKV7zv56uv.jpg", releaseDate: 2001-10-05, 
    overview: "On his first day on the job as a narcotics officer, a rookie cop works with a rogue detective who isn't what he appears.", 
    rating: 7.5 
},
{ 
    title: "Pineapple Express", 
    posterURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2//6E50WjeOYjDZg9HXgPjYdGtY2jG.jpg", releaseDate: 2008-08-06, 
    overview: "A stoner and his dealer are forced to go on the run from the police after the pothead witnesses a cop commit a murder.", 
    rating: 6.6 
},
{ 
    title: "Pulp Fiction", 
    posterURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2//d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg", releaseDate: 1994-09-10, 
    overview: "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.", 
    rating: 8.5 
},
{ 
    title: "The Wolf of Wall Street", 
    posterURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2//34m2tygAYBGqA9MXKhRDtzYd4MR.jpg", releaseDate: 2013-12-25, 
    overview: "A New York stockbroker refuses to cooperate in a large securities fraud case involving corruption on Wall Street, corporate banking world and mob infiltration. Based on Jordan Belfort's autobiography.", 
    rating: 8 
},
{ 
title: "Requiem for a Dream", 
posterURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2//nOd6vjEmzCT0k4VYqsA2hwyi87C.jpg", releaseDate: 2000-10-06, 
overview: "The hopes and dreams of four ambitious people are shattered when their drug addictions begin spiraling out of control. A look into addiction and how it overcomes the mind and body.", rating: 8 
},
{ 
    title: "Beautiful Boy", 
    posterURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2//u2Gfv0mz3xePsgyCPHovrnFL1sB.jpg", releaseDate: 2018-10-12, 
    overview: "After he and his first wife separate, journalist David Sheff struggles to help their teenage son, who goes from experimenting with drugs to becoming devastatingly addicted to methamphetamine.", 
    rating: 7.6 
},
{ 
    title: "American Gangster", 
    posterURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2//sX9idXDqRUxE5ffww3n3RV5gL55.jpg", releaseDate: 2007-11-02, 
    overview: "Following the death of his employer and mentor, Bumpy Johnson, Frank Lucas establishes himself as the number one importer of heroin in the Harlem district of Manhattan. He does so by buying heroin directly from the source in South East Asia and he comes up with a unique way of importing the drugs into the United States. Partly based on a true story.", 
    rating: 7.6
},
{ 
    title: "The Mule", 
    posterURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2//klazQbxk3yfuZ8JcfO9jdKOZQJ7.jpg", releaseDate: 2018-12-14, 
    overview: "Earl Stone, a man in his eighties, is broke, alone, and facing foreclosure of his business when he is offered a job that simply requires him to drive. Easy enough, but, unbeknownst to Earl, he's just signed on as a drug courier for a Mexican cartel. He does so well that his cargo increases exponentially, and Earl hit the radar of hard-charging DEA agent Colin Bates.", rating: 6.8 
},
{ 
    title: "The Basketball Diaries", 
    posterURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2//AhvO1GGDPIgN0hOqZEgaFCbswMK.jpg", releaseDate: 1995-04-21, 
    overview: "A high school basketball player’s life turns upside down after free-falling into the harrowing world of drug addiction.", 
    rating: 7.4 
},
{ 
    title: "Dope", 
    posterURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2//n6u00imN7AX2NiyWUc5kTgHXmEf.jpg", releaseDate: 2015-06-19, 
    overview: "Malcolm is carefully surviving life in a tough neighborhood in Los Angeles while juggling college applications, academic interviews, and the SAT. A chance invitation to an underground party leads him into an adventure that could allow him to go from being a geek, to being dope, to ultimately being himself.", 
    rating: 7.1 
}];