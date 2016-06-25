import {FlowRouter} from 'meteor/kadira:flow-router';
import React from 'react';
import { mount } from 'react-mounter';
import Home from '../ui/pages/Home.jsx';
import About from '../ui/pages/About.jsx';
import NotFound from '../ui/pages/NotFound.jsx';
import MainLayout from '../ui/containers/MainLayout.jsx'; 
import Header from '../ui/components/Header.jsx'; 


FlowRouter.route('/', {
  name: 'Index',
  action() {
    mount(MainLayout, {
      content: <MainLayout />
    })
  }
});
