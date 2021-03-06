/*************************************************************************
 * This file is part of input-overlay
 * github.con/univrsal/input-overlay
 * Copyright 2021 univrsal <uni@vrsal.de>.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, version 2 of the License.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *************************************************************************/

var atlas = null;
var cfg = null;
var main_painter = null;

$(function() {
    main_painter = new painter("#main-canvas", (p, c) => cfg.draw(p, c));
    cfg = new config("#main-canvas", main_painter);
    main_painter.resize_canvas(); // Run once to get correct window size
    main_painter.load_image("https://raw.githubusercontent.com/univrsal/input-overlay/master/docs/cct/res/wasd.png")
        .then(function(img) { atlas = img; });
    main_painter.get_context().imageSmoothingEnabled = false;

    $.getJSON('https://raw.githubusercontent.com/univrsal/input-overlay/master/docs/cct/res/wasd.json',
              function(data) { cfg.load_from_json(data); });
});