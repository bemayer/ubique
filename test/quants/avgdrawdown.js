import assert from 'assert';
import { avgdrawdown } from '../../quants/avgdrawdown.js';

var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
var cat = ubique.cat;

ubique.avgdrawdown(x);

ubique.avgdrawdown(x,1);

ubique.avgdrawdown(cat(0,x,y));

