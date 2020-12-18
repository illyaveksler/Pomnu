import kivy
from kivy.app import App
from kivy.uix.floatlayout import FloatLayout
from kivy.uix.scatter import Scatter
from kivy.uix.togglebutton import ToggleButton
from kivy.config import Config

Config.set('graphics', 'width', '576')
Config.set('graphics', 'height', '1024')
Config.set('graphics', 'resizable', True)

class TaskLayout(FloatLayout):
    pass

class TaskApp(App):
    def build(self):
        return TaskLayout()


app = TaskApp()
app.run()