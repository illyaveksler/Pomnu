import kivy
kivy.require('1.9.0')

from kivy.app import App
from kivy.clock import Clock
from kivy.uix.label import Label
from kivy.uix.widget import Widget
from kivy.uix.floatlayout import FloatLayout
from kivy.uix.boxlayout import BoxLayout
from kivy.uix.recycleboxlayout import RecycleBoxLayout
from kivy.config import Config
from kivy.lang import Builder
from datetime import datetime
import calendar

# This code allows the use of unicode.
# It's best to implement it later.
#with open("todolist.kv", encoding='utf-8') as f:
#    Builder.load_string(f.read())

Config.set('graphics', 'width', '576')
Config.set('graphics', 'height', '1024')
Config.set('graphics', 'resizable', True)

class Login(Label):
    pass

class TodoList(BoxLayout):
    today = datetime.today().strftime('%b %d, %A')

class ToDoListApp(App):
    def build(self):
        self.title = 'pomnu'
        return TodoList()

    def on_start(self):
        Clock.schedule_once(self.create_data, 0.5)

    def create_data(self, dt):
        self.root.ids.task_list.data = [
            {
            'text': "Example task " + str(i), 'font_size': 16, 
            'height': 75, 'width': 575,
            'font_name': "assets/inter-font-family/Inter-Medium.ttf",
            'background_normal':'', 'color': (0, 0, 0, 0.8), 
            } for i in range(20)
        ]
        
    def new_task(self):
        pass

app = ToDoListApp()
app.run()
