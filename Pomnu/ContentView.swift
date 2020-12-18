//
//  ContentView.swift
//  Pomnu
//
//  Created by Ilya Veksler on 2020-12-17.
//  Copyright © 2020 Ilya Veksler. All rights reserved.
//

import SwiftUI

class LoopIndex: ObservableObject {
    @Published var score:Int = 0
}

struct Subject {
    var subject: String
    var color: Color
    init(subject: String, color: Color) {
        self.subject = subject
        self.color = color
    }
}

struct TestData: Identifiable {
    var id = UUID()
    var name: String
    var subject: Subject
}

struct CategoryPill: View {
    
    var categoryName: String
    var color: Color
    var fontSize: CGFloat = 12.0
    
    var body: some View {
        ZStack {
            Text("• " + categoryName)
                .font(.system(size: fontSize, weight: .regular))
                .lineLimit(2)
                .foregroundColor(.white)
                .padding(5)
                .background(color)
                .cornerRadius(5)
        }
    }
}

struct Topic: View {

    var myData : [TestData]
    var index : Int = 0
    var body: some View {
        ForEach(myData, id: \.name) { item in
            VStack(spacing: 0) {
                if item.name != self.myData[0].name {
                    Divider()
                }
                HStack(spacing: 0) {
                    VStack(alignment: .leading) {
                        Text(item.name)
                        .padding(.bottom, 5)
                        HStack {
                            CategoryPill(categoryName: item.subject.subject, color: item.subject.color)
                        }
                                        
                    }
                    .padding(.horizontal, 5)
                    Spacer()
                    HStack {
                        Button(action: /*@START_MENU_TOKEN@*/{}/*@END_MENU_TOKEN@*/) {
                        Circle()
                        .stroke(Color.red, lineWidth: 2)
                        .frame(width: 27, height: 27)
                        }
                        Button(action: /*@START_MENU_TOKEN@*/{}/*@END_MENU_TOKEN@*/) {
                        Circle()
                        .stroke(Color.yellow, lineWidth: 2)
                        .frame(width: 27, height: 27)
                        }
                        Button(action: /*@START_MENU_TOKEN@*/{}/*@END_MENU_TOKEN@*/) {
                        Circle()
                        .stroke(Color.green, lineWidth: 2)
                        .frame(width: 27, height: 27)
                        }
                    }
                    .padding(.horizontal, 5)
                }
                .padding(12)
            }

        }
        
    }
}

struct DayView: View {
    var myData : [TestData]
    var day : String
    var date : String
    var body: some View {
        VStack(spacing: 0) {
            HStack(spacing: 0) {
                Text(day).font(.title)
                    .fontWeight(.semibold)
                    .multilineTextAlignment(.leading)
                    .padding(.horizontal, 18)
                Text(date).font(.subheadline).padding(.horizontal, -13)
                Spacer()
            }
            Topic(myData: myData)
        }
    }
}

struct ContentView: View {
    let todayData = [
        TestData(name: "Electrostatics", subject: Subject(subject: "PHYS 1120", color: Color.red)),
        TestData(name: "Matrices", subject: Subject(subject: "MATH 2232", color: Color.yellow)),
        TestData(name: "Cardiology", subject: Subject(subject: "BIOL 1210", color: Color.green)),
        TestData(name: "Thermodynamics", subject:Subject(subject: "CHEM 1210", color: Color.blue))
    ]
    
    let tomorrowData = [
        TestData(name: "Equilibrium", subject: Subject(subject: "PHYS 1170", color: Color.red)),
        TestData(name: "Determinants", subject: Subject(subject: "MATH 2232", color: Color.yellow))
    ]
    
    var body: some View {
        VStack(spacing:0) {
            HStack {
                Spacer()
                Button(action: {
                    print("Menu button was tapped")
                }) {
                    Image(systemName: "ellipsis.circle").resizable()
                    .frame(width: 27, height: 27)
                }.padding(.horizontal, 20)
            }
            ScrollView {
                VStack {
                    DayView(myData: todayData, day: "Today", date: "• Friday, December 18")
                }
                VStack() {
                    DayView(myData: tomorrowData, day: "Tomorrow", date: "• Saturday, December 19")
                }
                .padding(.vertical, 20)
            }
            .padding(.vertical, 15)
        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
