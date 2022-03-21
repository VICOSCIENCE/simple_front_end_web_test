import React, { Component } from "react";
import * as d3 from 'd3';
import { getReferenceSizeWidth, getReferenceSizeHeight, rp, getWidthHeight } from "./referenceSize";
import { setTriangle } from "./headerMenu";
import { selectAll } from "d3";



//2022-01-07
export function setHtmlText(svg, opacity, id, x, y, w, h, texto, fontSize, font, align, margin, color, bold, letterSpacing, lineHeight) {

    var boldParam1 = ''
    var boldParam2 = ''
    if (bold == 'bold') {
        boldParam1 = '<b style="color:' + color + '">'
        boldParam2 = '</b>'
    }
    svg.append("foreignObject")
        .attr("id", id)
        .attr('opacity', opacity)
        .attr('x', x)
        .attr('y', y)
        .attr("width", w)
        .attr("height", h)
        .html(function (d) {
            return '<div style="line-height: ' + lineHeight + ';"><p align="' + align + '" style="margin: ' + margin + '; color: ' + color + '; letter-spacing:' + letterSpacing + 'px">' + boldParam1 + texto + boldParam1 + '</p></div>'
        })
        .attr("font-size", fontSize)
        .style("font-family", font)
}
export function setHtmlTextBorde(svg, opacity, id, x, y, w, h, texto, fontSize, font, align, margin, color, bold, letterSpacing, lineHeight) {

    var boldParam1 = ''
    var boldParam2 = ''
    if (bold == 'bold') {
        boldParam1 = '<b style="color:' + color + '">'
        boldParam2 = '</b>'
    }
    svg.append("foreignObject")
        .attr("id", id)
        .attr('opacity', opacity)
        .attr('x', x)
        .attr('y', y)
        .attr("width", w)
        .attr("height", h)
        .html(function (d) {
            return '<div style="border: 1px solid blue;"><p align="' + align + '" style="margin: ' + margin + '; color: ' + color + '; letter-spacing:' + letterSpacing + 'px; line-height:' + lineHeight + '">' + boldParam1 + texto + boldParam1 + '</p></div>'
        })
        .attr("font-size", fontSize)
        .style("font-family", font)
}
export function setHtmlTextLink(svg, opacity, id, x, y, w, h, texto, fontSize, font, align, margin, color, bold, link) {
    //console.log('setHtmlTextLink('+id+') ' + link);
    var boldParam1 = ''
    var boldParam2 = ''
    if (bold == 'bold') {
        boldParam1 = '<b style="color:' + color + '">'
        boldParam2 = '</b>'
    }
    svg.append("foreignObject")
        .attr('opacity', opacity)
        .attr("id", id)
        .attr('x', x)
        .attr('y', y)
        .attr("width", w)
        .attr("height", h)
        .html(function (d) {
            return '<div style=""><p align="' + align + '" style="margin: ' + margin + '; color: ' + color + '">' + boldParam1 + texto + boldParam1 + '</p></div>'
        })
        .attr("font-size", fontSize)
        .style("font-family", font)
        .style("font-family", "Roboto")
        .style("cursor", "pointer")
        .on("click", function () {
            //console.log('window.location.href =' + link);
            window.location.href = link
        })
}

export function setHtmlTextInclinado(svg, opacity, id, w, h, texto, fontSize, font, align, margin, color, bold, tx, ty, dy) {

    var boldParam1 = ''
    var boldParam2 = ''
    if (bold == 'bold') {
        boldParam1 = '<b style="color:' + color + '">'
        boldParam2 = '</b>'
    }
    svg.append("foreignObject")
        .attr('opacity', opacity)
        .attr("id", id)
        .attr('dy', dy)
        .attr("width", w)
        .attr("height", h)
        .attr("transform", 'translate(' + tx + ', ' + ty + '), ' + 'rotate(-45)')
        .html(function (d) {
            return '<div style=""><p align="' + align + '" style="margin: ' + margin + '; color: ' + color + '">' + boldParam1 + texto + boldParam1 + '</p></div>'
        })
        .attr("font-size", fontSize)
        .style("font-family", font)
}
export function gradientRect(svg, x, y, w, h, rx, ry, stroke, strokeWidth, filter, id, opacity, fill) {
    if (window.innerHeight > window.innerWidth) {
        var width = window.innerWidth
        var height = (getReferenceSizeHeight() / getReferenceSizeWidth()) * window.innerWidth
    } else {
        var width = window.innerWidth
        var height = window.innerHeight
    }

    var [_width, _height] = getWidthHeight();

    var svgDefs = svg.append('defs');

    if (opacity == undefined) {
        opacity = 1
    }
    if (fill == undefined || fill == '') {
        fill = 'white'
    }
    if (strokeWidth == undefined || strokeWidth == '') {
        strokeWidth = (rp(3.86, 'x', _width, _height))
    }
    svg.append('rect')
        .attr('id', id)
        .attr('x', x)
        .attr('y', y)
        .attr("transform", "rotate(0)")
        .attr('width', w)
        .attr('height', h)
        .attr('stroke', stroke) //bgLinGradA
        .attr('stroke-width', strokeWidth)
        .attr("filter", filter)
        .attr("fill", fill)
        .attr("rx", rx)
        .attr("ry", ry)
        .attr('opacity', opacity)
}
export function setFlipImgText(setValuesFlipImgText) {

    var svg = setValuesFlipImgText['svg']
    var idFlip = setValuesFlipImgText['idFlip']
    var flip_x = setValuesFlipImgText['flip_x']
    var flip_y = setValuesFlipImgText['flip_y']
    var flip_width = setValuesFlipImgText['flip_width']
    var flip_height = setValuesFlipImgText['flip_height']
    var flip_r = setValuesFlipImgText['flip_r']
    var mImgX = setValuesFlipImgText['mImgX']
    var mImgY = setValuesFlipImgText['mImgY']
    var mImgW = setValuesFlipImgText['mImgW']
    var mTextX = setValuesFlipImgText['mTextX']
    var mTextY = setValuesFlipImgText['mTextY']
    var mTextW = setValuesFlipImgText['mTextW']
    var fill = setValuesFlipImgText['fill']
    var stroke = setValuesFlipImgText['stroke']
    var filter = setValuesFlipImgText['filter']
    var imgSource = setValuesFlipImgText['imgSource']
    var text = setValuesFlipImgText['text']
    var textOpacity = setValuesFlipImgText['textOpacity']
    var fontSize = setValuesFlipImgText['fontSize']
    var font = setValuesFlipImgText['font']
    var align = setValuesFlipImgText['align']
    var margin = setValuesFlipImgText['margin']
    var color = setValuesFlipImgText['color']
    var bold = setValuesFlipImgText['bold']
    var letterSpacing = setValuesFlipImgText['letterSpacing']
    var lineHeight = setValuesFlipImgText['lineHeight']

    var [_width, _height] = getWidthHeight();

    gradientRect(svg,
        flip_x,
        flip_y,
        flip_width,
        flip_height,
        flip_r,
        flip_r,
        fill,
        '',
        filter,
        'flip' + idFlip
    )

    svg.append("image")
        .attr('id', 'flipFront' + idFlip)
        .attr("xlink:href", window.location.origin + imgSource)
        .attr("x", flip_x + (flip_width * mImgX))
        .attr("y", flip_y + (flip_height * mImgY))
        .attr("width", flip_width * mImgW);

    setHtmlText(
        svg,
        textOpacity,
        'flipBack' + idFlip,
        flip_x + (flip_width * mTextX),
        flip_y + (flip_height * mTextY),
        flip_width * mTextW,
        flip_height,
        text,
        fontSize,
        font,
        align,
        margin,
        color,
        bold,
        letterSpacing,
        lineHeight
    )

    svg.append('rect')
        .attr('id', 'hoverFlip' + idFlip)
        .attr('x', flip_x)
        .attr('y', flip_y)
        .attr('width', flip_width)
        .attr('height', flip_height)
        .attr("fill", "transparent")
        .attr("opacity", "0.1")
        .attr("rx", flip_r)
        .attr("ry", flip_r)
        .on('mouseover', function (d, i) {
            d3.select('#flip' + idFlip)
                .transition()
                .duration(100)
                .attr('x', flip_x + (flip_width / 2))
                .attr('width', rp(2, 'x', _width, _height))
                .transition()
                .duration(100)
                .attr('x', flip_x)
                .attr('width', flip_width)

            d3.select('#flipFront' + idFlip)
                .attr('opacity', 0)

            d3.select('#flipBack' + idFlip)
                .transition()
                .duration(100)
                .attr('x', flip_x + (flip_width / 2))
                .attr('width', rp(2, 'x', _width, _height))
                .transition()
                .duration(100)
                .attr('x', flip_x + (flip_width * mTextX))
                .attr('width', flip_width * mTextW)
                .attr('opacity', 1)
        })
        .on('mouseout', function (d, i) {
            d3.select('#flip' + idFlip)
                .transition()
                .duration(100)
                .duration(100)
                .attr('x', flip_x + (flip_width / 2))
                .attr('width', rp(2, 'x', _width, _height))
                .transition()
                .duration(100)
                .attr('x', flip_x)
                .attr('width', flip_width)
                .attr("fill", "white")

            d3.select('#flipFront' + idFlip)
                .transition()
                .duration(100)
                .attr('x', flip_x + (flip_width / 2))
                .attr('width', rp(2, 'x', _width, _height))
                .transition()
                .duration(100)
                .attr("x", flip_x + (flip_width * mImgX))
                .attr("y", flip_y + (flip_height * mImgY))
                .attr("width", flip_width * mImgW)
                .attr('opacity', 1);

            d3.select('#flipBack' + idFlip)
                .attr('opacity', 0)
        })
}
export function setFlipBienvenida(setValuesFlipBienvenida) {

    var svg = setValuesFlipBienvenida['svg']
    var idFlip = setValuesFlipBienvenida['idFlip']
    var flip_x1 = setValuesFlipBienvenida['flip_x1']
    var flip_y1 = setValuesFlipBienvenida['flip_y1']
    var flip_x2 = setValuesFlipBienvenida['flip_x2']
    var flip_y2 = setValuesFlipBienvenida['flip_y2']
    var flip_w = setValuesFlipBienvenida['flip_w']
    var flip_h = setValuesFlipBienvenida['flip_h']
    var flip_r = setValuesFlipBienvenida['flip_r']
    var flip_cx = setValuesFlipBienvenida['flip_cx']
    var flip_cy = setValuesFlipBienvenida['flip_cy']
    var flip_cr = setValuesFlipBienvenida['flip_cr']
    var fill = setValuesFlipBienvenida['fill']
    var stroke = setValuesFlipBienvenida['stroke']
    var filter = setValuesFlipBienvenida['filter']
    var imgSource1 = setValuesFlipBienvenida['imgSource1']
    var imgSource2 = setValuesFlipBienvenida['imgSource2']
    var imgSource3 = setValuesFlipBienvenida['imgSource3']
    var imgSource4 = setValuesFlipBienvenida['imgSource4']
    var textTitle1 = setValuesFlipBienvenida['textTitle1']
    var textTitle2 = setValuesFlipBienvenida['textTitle2']
    var textTitle3 = setValuesFlipBienvenida['textTitle3']
    var textTitle4 = setValuesFlipBienvenida['textTitle4']
    var textDesc1 = setValuesFlipBienvenida['textDesc1']
    var textDesc2 = setValuesFlipBienvenida['textDesc2']
    var textDesc3 = setValuesFlipBienvenida['textDesc3']
    var textDesc4 = setValuesFlipBienvenida['textDesc4']
    var fontSizeTitle = setValuesFlipBienvenida['fontSizeTitle']
    var fontSizeDesc = setValuesFlipBienvenida['fontSizeDesc']
    var fontTitle = setValuesFlipBienvenida['fontTitle']
    var fontDesc = setValuesFlipBienvenida['fontDesc']
    var alignTitle = setValuesFlipBienvenida['alignTitle']
    var alignDesc = setValuesFlipBienvenida['alignDesc']
    var colorTitle = setValuesFlipBienvenida['colorTitle']
    var colorDesc = setValuesFlipBienvenida['colorDesc']
    var letterSpacingTitle = setValuesFlipBienvenida['letterSpacingTitle']
    var letterSpacingDesc = setValuesFlipBienvenida['letterSpacingDesc']
    var lineHeightTitle = setValuesFlipBienvenida['lineHeightTitle']
    var lineHeightDesc = setValuesFlipBienvenida['lineHeightDesc']
    var bold = setValuesFlipBienvenida['bold']
    var margin = setValuesFlipBienvenida['margin']
    var textOpacity = setValuesFlipBienvenida['textOpacity']

    // var [x_nodo_m, y_nodo_m] = arcSegment_centroidePractica.centroid(arcSegment_centroidePractica);
    var [_width, _height] = getWidthHeight();

    /******************************
    people - Start
    *******************************/

    //containerPeople1
    //rectGradiant
    svg.append('rect')
        .attr('id', 'flipFront')
        .style('fill', 'url(#bgLinGradG)')
        .attr('filter', filter)
        .attr('x', flip_x1)
        .attr('y', flip_y1)
        .attr('width', flip_w)
        .attr('height', flip_h)
        .attr("rx", flip_r)
        .attr("ry", flip_r)
        .attr('opacity', 1)

    gradientRect(svg,
        (flip_x1),
        (flip_y1 + (flip_h * 0.85)),
        (flip_w),
        (flip_h * 0.85),
        flip_r,
        flip_r,
        fill,
        '',
        filter,
        'flipFront'
    )

    svg.append("image")
        .attr('id', 'flipFront')
        .attr("xlink:href", window.location.origin + imgSource1)
        .attr("x", (flip_x1 + (flip_w * 0.15)))
        .attr("y", (flip_y1 * 1.18))
        .attr("width", (flip_w * 0.70))

    setHtmlText(
        svg,
        1,
        'flipFront',
        (flip_x1 + (flip_w * 0.1)),
        (flip_y1 + (flip_h * 0.9)),
        (flip_w * 0.8),
        (flip_h * 0.3077),
        textTitle1,
        fontSizeTitle,
        fontTitle,
        alignTitle,
        0,
        colorTitle
    )

    setHtmlText(
        svg,
        1,
        'flipFront',
        (flip_x1 + (flip_w * 0.1)),
        (flip_y1 + (flip_h * 1.15)),
        (flip_w * 0.8),
        (flip_h * 0.5),
        textDesc1,
        fontSizeDesc,
        fontDesc,
        alignDesc,
        0,
        colorDesc
    )

    //triangle
    var x_triangle = (flip_x1 + (flip_w * 0.5))
    var y_triangle = (flip_y1 + (flip_h * 0.86))
    var vertexA = (-rp(30, 'x', _width, _height)) //valor negativo indica punta arriba
    var vertexBX = (-rp(30, 'x', _width, _height))
    var vertexBY = (0)
    var vertexCX = (rp(30, 'x', _width, _height))
    var vertexCY = (0)

    var valueSetTriangle = []
    valueSetTriangle['svg'] = svg
    valueSetTriangle['x'] = x_triangle
    valueSetTriangle['y'] = y_triangle
    valueSetTriangle['vertexA'] = vertexA
    valueSetTriangle['vertexBX'] = vertexBX
    valueSetTriangle['vertexBY'] = vertexBY
    valueSetTriangle['vertexCX'] = vertexCX
    valueSetTriangle['vertexCY'] = vertexCY
    valueSetTriangle['fill'] = 'white'
    valueSetTriangle['filter'] = ''
    valueSetTriangle['id'] = 'flipFront'
    setTriangle(valueSetTriangle)

    //containerPeople2
    //rectGradiant
    svg.append('rect')
        .attr('id', 'flipFront')
        .style('fill', 'url(#bgLinGradG)')
        .attr('filter', filter)
        .attr('x', flip_x2)
        .attr('y', flip_y2)
        .attr('width', flip_w)
        .attr('height', flip_h)
        .attr("rx", flip_r)
        .attr("ry", flip_r)
        .attr('opacity', 1)

    gradientRect(svg,
        (flip_x2),
        (flip_y2 + (flip_h * 0.85)),
        (flip_w),
        (flip_h * 0.85),
        flip_r,
        flip_r,
        fill,
        '',
        filter,
        'flipFront'
    )

    svg.append("image")
        .attr('id', 'flipFront')
        .attr("xlink:href", window.location.origin + imgSource2)
        .attr("x", (flip_x2 + (flip_w * 0.15)))
        .attr("y", (flip_y2 * 1.18))
        .attr("width", (flip_w * 0.70))

    setHtmlText(
        svg,
        1,
        'flipFront',
        (flip_x2 + (flip_w * 0.1)),
        (flip_y2 + (flip_h * 0.9)),
        (flip_w * 0.8),
        (flip_h * 0.3077),
        textTitle2,
        fontSizeTitle,
        fontTitle,
        alignTitle,
        0,
        colorTitle
    )

    setHtmlText(
        svg,
        1,
        'flipFront',
        (flip_x2 + (flip_w * 0.1)),
        (flip_y2 + (flip_h * 1.15)),
        (flip_w * 0.8),
        (flip_h * 0.5),
        textDesc2,
        fontSizeDesc,
        fontDesc,
        alignDesc,
        0,
        colorDesc
    )

    //triangle
    var x_triangle = (flip_x2 + (flip_w * 0.5))
    var y_triangle = (flip_y2 + (flip_h * 0.86))

    var valueSetTriangle = []
    valueSetTriangle['svg'] = svg
    valueSetTriangle['x'] = x_triangle
    valueSetTriangle['y'] = y_triangle
    valueSetTriangle['vertexA'] = vertexA
    valueSetTriangle['vertexBX'] = vertexBX
    valueSetTriangle['vertexBY'] = vertexBY
    valueSetTriangle['vertexCX'] = vertexCX
    valueSetTriangle['vertexCY'] = vertexCY
    valueSetTriangle['fill'] = 'white'
    valueSetTriangle['filter'] = ''
    valueSetTriangle['id'] = 'flipFront'
    setTriangle(valueSetTriangle)
    /******************************
    people - Finish
    *******************************/
    /******************************
people - Start
*******************************/

    //containerPeople1
    //rectGradiant
    svg.append('rect')
        .attr('id', 'flipBack')
        .style('fill', 'url(#bgLinGradG)')
        .attr('filter', filter)
        .attr('x', flip_x1)
        .attr('y', flip_y1)
        .attr('width', flip_w)
        .attr('height', flip_h)
        .attr("rx", flip_r)
        .attr("ry", flip_r)
        .attr('opacity', 0)

    gradientRect(svg,
        (flip_x1),
        (flip_y1 + (flip_h * 0.85)),
        (flip_w),
        (flip_h * 0.85),
        flip_r,
        flip_r,
        fill,
        '',
        filter,
        'flipBack',
        0
    )

    svg.append("image")
        .attr('id', 'flipBack')
        .attr("xlink:href", window.location.origin + imgSource3)
        .attr("x", (flip_x1 + (flip_w * 0.15)))
        .attr("y", (flip_y1 * 1.18))
        .attr("width", (flip_w * 0.70))
        .attr("opacity", 0)

    setHtmlText(
        svg,
        0,
        'flipBack',
        (flip_x1 + (flip_w * 0.1)),
        (flip_y1 + (flip_h * 0.9)),
        (flip_w * 0.8),
        (flip_h * 0.3077),
        textTitle3,
        fontSizeTitle,
        fontTitle,
        alignTitle,
        0,
        colorTitle
    )

    setHtmlText(
        svg,
        0,
        'flipBack',
        (flip_x1 + (flip_w * 0.1)),
        (flip_y1 + (flip_h * 1.15)),
        (flip_w * 0.8),
        (flip_h * 0.5),
        textDesc3,
        fontSizeDesc,
        fontDesc,
        alignDesc,
        0,
        colorDesc
    )

    //triangle
    var x_triangle = (flip_x1 + (flip_w * 0.5))
    var y_triangle = (flip_y1 + (flip_h * 0.86))
    var vertexA = (-rp(30, 'x', _width, _height)) //valor negativo indica punta arriba
    var vertexBX = (-rp(30, 'x', _width, _height))
    var vertexBY = (0)
    var vertexCX = (rp(30, 'x', _width, _height))
    var vertexCY = (0)

    var valueSetTriangle = []
    valueSetTriangle['svg'] = svg
    valueSetTriangle['x'] = x_triangle
    valueSetTriangle['y'] = y_triangle
    valueSetTriangle['vertexA'] = vertexA
    valueSetTriangle['vertexBX'] = vertexBX
    valueSetTriangle['vertexBY'] = vertexBY
    valueSetTriangle['vertexCX'] = vertexCX
    valueSetTriangle['vertexCY'] = vertexCY
    valueSetTriangle['fill'] = 'white'
    valueSetTriangle['filter'] = ''
    valueSetTriangle['id'] = 'flipBack'
    valueSetTriangle['opacity'] = 0
    setTriangle(valueSetTriangle)

    //containerPeople2
    //rectGradiant
    svg.append('rect')
        .attr('id', 'flipBack')
        .style('fill', 'url(#bgLinGradG)')
        .attr('filter', filter)
        .attr('x', flip_x2)
        .attr('y', flip_y2)
        .attr('width', flip_w)
        .attr('height', flip_h)
        .attr("rx", flip_r)
        .attr("ry", flip_r)
        .attr('opacity', 0)

    gradientRect(svg,
        (flip_x2),
        (flip_y2 + (flip_h * 0.85)),
        (flip_w),
        (flip_h * 0.85),
        flip_r,
        flip_r,
        fill,
        '',
        filter,
        'flipBack',
        0
    )

    svg.append("image")
        .attr('id', 'flipBack')
        .attr("xlink:href", window.location.origin + imgSource4)
        .attr("x", (flip_x2 * 1.04))
        .attr("y", (flip_y2 * 1.18))
        .attr("width", (flip_w * 0.703125))
        .attr("opacity", 0)

    setHtmlText(
        svg,
        0,
        'flipBack',
        (flip_x2 + (flip_w * 0.1)),
        (flip_y2 + (flip_h * 0.9)),
        (flip_w * 0.8),
        (flip_h * 0.3077),
        textTitle4,
        fontSizeTitle,
        fontTitle,
        alignTitle,
        0,
        colorTitle
    )

    setHtmlText(
        svg,
        0,
        'flipBack',
        (flip_x2 + (flip_w * 0.1)),
        (flip_y2 + (flip_h * 1.15)),
        (flip_w * 0.8),
        (flip_h * 0.5),
        textDesc4,
        fontSizeDesc,
        fontDesc,
        alignDesc,
        0,
        colorDesc
    )

    //triangle
    var x_triangle = (flip_x2 + (flip_w * 0.5))
    var y_triangle = (flip_y2 + (flip_h * 0.86))

    var valueSetTriangle = []
    valueSetTriangle['svg'] = svg
    valueSetTriangle['x'] = x_triangle
    valueSetTriangle['y'] = y_triangle
    valueSetTriangle['vertexA'] = vertexA
    valueSetTriangle['vertexBX'] = vertexBX
    valueSetTriangle['vertexBY'] = vertexBY
    valueSetTriangle['vertexCX'] = vertexCX
    valueSetTriangle['vertexCY'] = vertexCY
    valueSetTriangle['fill'] = 'white'
    valueSetTriangle['filter'] = ''
    valueSetTriangle['id'] = 'flipBack'
    valueSetTriangle['opacity'] = 0
    setTriangle(valueSetTriangle)
    /******************************
    people - Finish
    *******************************/
    //bottomButton
    var valuesSetMenuInteriorH = []
    valuesSetMenuInteriorH['svg'] = svg
    setMenuInteriorH(valuesSetMenuInteriorH)

}
export function getButtonFlipFront(svg, flip_cx, flip_cy, flip_cr) {
    if (window.innerHeight > window.innerWidth) {
        var width = window.innerWidth
        var height = (getReferenceSizeHeight() / getReferenceSizeWidth()) * window.innerWidth
    } else {
        var width = window.innerWidth
        var height = window.innerHeight
    }
    var svgDefs = svg.append('defs');

    svg.append("circle")
        .attr("id", "buttonFlipFront")
        .attr("cx", flip_cx)
        .attr("cy", flip_cy)
        .attr("r", flip_cr)
        .style("fill", "#EDEDED")
        .style("stroke", "#4d4d4d")
        .style("stroke-width", rp(2, 'x', width, height))
        .style("cursor", "pointer")
        .on("click", function () {

            d3.selectAll('#flipFront')
                .attr('opacity', 0);

            d3.selectAll('#flipBack')
                .attr('opacity', 1)

            d3.selectAll("#buttonFlipFront").remove()

            getButtonFlipBack(svg, flip_cx, flip_cy, flip_cr)
        })
}
export function getButtonFlipBack(svg, flip_cx, flip_cy, flip_cr) {
    if (window.innerHeight > window.innerWidth) {
        var width = window.innerWidth
        var height = (getReferenceSizeHeight() / getReferenceSizeWidth()) * window.innerWidth
    } else {
        var width = window.innerWidth
        var height = window.innerHeight
    }
    var svgDefs = svg.append('defs');

    svg.append("circle")
        .attr("id", "buttonFlipBack")
        .attr("cx", flip_cx)
        .attr("cy", flip_cy)
        .attr("r", flip_cr)
        .style("fill", "#EDEDED")
        .style("stroke", "#4d4d4d")
        .style("stroke-width", rp(2, 'x', width, height))
        .style("cursor", "pointer")
        .on("click", function () {

            d3.selectAll('#flipFront')
                .attr('opacity', 1);

            d3.selectAll('#flipBack')
                .attr('opacity', 0)

            d3.selectAll("#buttonFlipBack").remove()

            getButtonFlipFront(svg, flip_cx, flip_cy, flip_cr)
        })
}
export function setRectColWithSmallRect(valuesSetRectColWithSmallRect, textSetRectColWithSmallRect, smallContentSetRectColWithSmallRect) {

    var svg = valuesSetRectColWithSmallRect['svg']
    var id = valuesSetRectColWithSmallRect['id']
    var wCont = valuesSetRectColWithSmallRect['wCont']
    var cantCol = valuesSetRectColWithSmallRect['cantCol']
    var distRect = valuesSetRectColWithSmallRect['distRect']
    var x = valuesSetRectColWithSmallRect['x']
    var y = valuesSetRectColWithSmallRect['y']
    var w = ((wCont - (distRect * (cantCol - 1))) / cantCol)
    var h = valuesSetRectColWithSmallRect['h']
    var r = valuesSetRectColWithSmallRect['r']
    var fill = valuesSetRectColWithSmallRect['fill']
    var stroke = valuesSetRectColWithSmallRect['stroke']
    var filter = valuesSetRectColWithSmallRect['filter']
    var textAlignEnc = valuesSetRectColWithSmallRect['textAlignEnc']
    var fontEnc = valuesSetRectColWithSmallRect['fontEnc']
    var fontSizeEnc = valuesSetRectColWithSmallRect['fontSizeEnc']
    var marginEnc = valuesSetRectColWithSmallRect['marginEnc']
    var colorEnc = valuesSetRectColWithSmallRect['colorEnc']
    var boldEnc = valuesSetRectColWithSmallRect['boldEnc']
    var letterSpacingEnc = valuesSetRectColWithSmallRect['letterSpacingEnc']
    var lineHeightEnc = valuesSetRectColWithSmallRect['lineHeightEnc']
    var textAlignDesc = valuesSetRectColWithSmallRect['textAlignDesc']
    var fontDesc = valuesSetRectColWithSmallRect['fontDesc']
    var fontSizeDesc = valuesSetRectColWithSmallRect['fontSizeDesc']
    var marginDesc = valuesSetRectColWithSmallRect['marginDesc']
    var colorDesc = valuesSetRectColWithSmallRect['colorDesc']
    var boldDesc = valuesSetRectColWithSmallRect['boldDesc']
    var letterSpacingDesc = valuesSetRectColWithSmallRect['letterSpacingDesc']
    var lineHeightDesc = valuesSetRectColWithSmallRect['lineHeightDesc']
    var textAlignSmallContent = valuesSetRectColWithSmallRect['textAlignSmallContent']
    var fontSmallContent = valuesSetRectColWithSmallRect['fontSmallContent']
    var fontSizeSmallContent = valuesSetRectColWithSmallRect['fontSizeSmallContent']
    var marginSmallContent = valuesSetRectColWithSmallRect['marginSmallContent']
    var colorSmallContent = valuesSetRectColWithSmallRect['colorSmallContent']
    var boldSmallContent = valuesSetRectColWithSmallRect['boldSmallContent']
    var letterSpacingSmallContent = valuesSetRectColWithSmallRect['letterSpacingSmallContent']
    var lineHeightSmallContent = valuesSetRectColWithSmallRect['lineHeightSmallContent']

    var text = textSetRectColWithSmallRect
    var smallContent = smallContentSetRectColWithSmallRect

    if (cantCol <= text.length) {
        for (var i = 0; i < cantCol; i++) {
            gradientRect(svg,
                (x + (distRect * i) + (w * i)),
                y,
                w,
                h,
                r,
                r,
                fill,
                stroke,
                filter,
                id,
                1
            )
            setHtmlText(
                svg,
                1,
                id,
                ((x + (distRect * i) + (w * i)) + (w * 0.05)),
                y + (h * 0.075),
                (w * 0.9),
                h,
                text[i].enc,
                fontSizeEnc,
                fontEnc,
                textAlignEnc,
                marginEnc,
                colorEnc,
                boldEnc,
                letterSpacingEnc,
                lineHeightEnc
            )
            setHtmlText(
                svg,
                1,
                id,
                ((x + (distRect * i) + (w * i)) + (w * 0.05)),
                y + (h * 0.21),
                (w * 0.9),
                h,
                text[i].desc,
                fontSizeDesc,
                fontDesc,
                textAlignDesc,
                marginDesc,
                colorDesc,
                boldDesc,
                letterSpacingDesc,
                lineHeightDesc
            )
            gradientRect(svg,
                (x + (distRect * i) + (w * i)) + ((w / 3) * 2),
                y * 0.9,
                (w / 3),
                (h * 0.12),
                r,
                r,
                fill,
                stroke,
                filter,
                id,
                1
            )
            svg.append("image")
                .attr('id', id)
                .attr("xlink:href", window.location.origin + smallContent[i].img)
                .attr("x", ((x + (distRect * i) + (w * i)) + ((w / 3) * 2)) + ((w / 3) * 0.1))
                .attr("y", (y * 0.9) + ((y * 0.9) * 0.05))
                .attr("width", (w / 3) * 0.8)
            setHtmlText(
                svg,
                1,
                id,
                (x + (distRect * i) + (w * i)) + ((w / 3) * 2) + ((w / 3) * 0.1),
                (y * 0.89),
                ((w / 3) * 0.8),
                (h * 0.12),
                smallContent[i].text,
                fontSizeSmallContent,
                fontSmallContent,
                textAlignSmallContent,
                marginSmallContent,
                colorSmallContent,
                boldSmallContent,
                letterSpacingSmallContent,
                lineHeightSmallContent
            )
        }
    }
    else {
        for (var i = 0; i < cantCol; i++) {
            gradientRect(svg,
                (x + (distRect * i) + (w * i)),
                y,
                w,
                h,
                r,
                r,
                fill,
                stroke,
                filter,
                id,
                1
            )
            gradientRect(svg,
                (x + (distRect * i) + (w * i)) + ((w / 3) * 2),
                y * 0.9,
                (w / 3),
                (h * 0.12),
                r,
                r,
                fill,
                stroke,
                filter,
                id,
                1
            )
        }
    }
}
export function setRectCol(valuesSetRectCol, textSetRectCol) {

    var svg = valuesSetRectCol['svg']
    var id = valuesSetRectCol['id']
    var wCont = valuesSetRectCol['wCont']
    var cantCol = valuesSetRectCol['cantCol']
    var distRect = valuesSetRectCol['distRect']
    var x = valuesSetRectCol['x']
    var y = valuesSetRectCol['y']
    var w = ((wCont - (distRect * (cantCol - 1))) / cantCol)
    var h = valuesSetRectCol['h']
    var r = valuesSetRectCol['r']
    var fill = valuesSetRectCol['fill']
    var stroke = valuesSetRectCol['stroke']
    var filter = valuesSetRectCol['filter']
    var paddingTBEnc = valuesSetRectCol['paddingTBEnc']
    var paddingLREnc = valuesSetRectCol['paddingLREnc']
    var paddingTEnc = valuesSetRectCol['paddingTEnc']
    var paddingBEnc = valuesSetRectCol['paddingBEnc']
    var paddingLEnc = valuesSetRectCol['paddingLEnc']
    var paddingREnc = valuesSetRectCol['paddingREnc']
    var paddingTBDesc = valuesSetRectCol['paddingTBDesc']
    var paddingLRDesc = valuesSetRectCol['paddingLRDesc']
    var paddingTDesc = valuesSetRectCol['paddingTDesc']
    var paddingBDesc = valuesSetRectCol['paddingBDesc']
    var paddingLDesc = valuesSetRectCol['paddingLDesc']
    var paddingRDesc = valuesSetRectCol['paddingRDesc']
    var textAlignEnc = valuesSetRectCol['textAlignEnc']
    var fontEnc = valuesSetRectCol['fontEnc']
    var fontSizeEnc = valuesSetRectCol['fontSizeEnc']
    var marginEnc = valuesSetRectCol['marginEnc']
    var colorEnc = valuesSetRectCol['colorEnc']
    var boldEnc = valuesSetRectCol['boldEnc']
    var letterSpacingEnc = valuesSetRectCol['letterSpacingEnc']
    var lineHeightEnc = valuesSetRectCol['lineHeightEnc']
    var textAlignDesc = valuesSetRectCol['textAlignDesc']
    var fontDesc = valuesSetRectCol['fontDesc']
    var fontSizeDesc = valuesSetRectCol['fontSizeDesc']
    var marginDesc = valuesSetRectCol['marginDesc']
    var colorDesc = valuesSetRectCol['colorDesc']
    var boldDesc = valuesSetRectCol['boldDesc']
    var letterSpacingDesc = valuesSetRectCol['letterSpacingDesc']
    var lineHeightDesc = valuesSetRectCol['lineHeightDesc']
    var fillColor = valuesSetRectCol['fillColor']
    var opacity = valuesSetRectCol['opacity']

    if (opacity == undefined) {
        opacity = 1
    }

    if (paddingTEnc == undefined) {
        paddingTEnc = 0
    }
    if (paddingBEnc == undefined) {
        paddingBEnc = 0
    }
    if (paddingLEnc == undefined) {
        paddingLEnc = 0
    }
    if (paddingREnc == undefined) {
        paddingREnc = 0
    }

    if (paddingTDesc == undefined) {
        paddingTDesc = 0
    }
    if (paddingBDesc == undefined) {
        paddingBDesc = 0
    }
    if (paddingLDesc == undefined) {
        paddingLDesc = 0
    }
    if (paddingRDesc == undefined) {
        paddingRDesc = 0
    }

    var text = textSetRectCol

    if (cantCol <= text.length) {
        for (var i = 0; i < cantCol; i++) {
            gradientRect(svg,
                (x + (distRect * i) + (w * i)),
                y,
                w,
                h,
                r,
                r,
                fill,
                stroke,
                filter,
                id,
                opacity,
                fillColor
            )
            setHtmlText(
                svg,
                opacity,
                id,
                ((x + (distRect * i) + (w * i)) + (w * paddingLREnc)),
                y + (w * paddingTBEnc),
                (w * (1 - (paddingLREnc * 2))),
                (h * (1 - (paddingTBEnc * 2))),
                text[i].enc,
                fontSizeEnc,
                fontEnc,
                textAlignEnc,
                marginEnc,
                colorEnc,
                boldEnc,
                letterSpacingEnc,
                lineHeightEnc
            )
            setHtmlText(
                svg,
                opacity,
                id,
                ((x + (distRect * i) + (w * i)) + (w * paddingLRDesc)),
                y + ((w * paddingTBDesc) + (w * paddingTDesc)),
                (w * (1 - (paddingLRDesc * 2))),
                (h * (1 - (paddingTBDesc * 2))),
                text[i].desc,
                fontSizeDesc,
                fontDesc,
                textAlignDesc,
                marginDesc,
                colorDesc,
                boldDesc,
                letterSpacingDesc,
                lineHeightDesc
            )
        }
    }
    else {
        for (var i = 0; i < cantCol; i++) {
            gradientRect(svg,
                (x + (distRect * i) + (w * i)),
                y,
                w,
                h,
                r,
                r,
                fill,
                stroke,
                filter,
                id,
                opacity,
                fillColor
            )

        }
    }
}
export function setRectRow(valuesSetRectRow, textSetRectRow) {

    var svg = valuesSetRectRow['svg']
    var id = valuesSetRectRow['id']
    var hCont = valuesSetRectRow['wCont']
    var cantCol = valuesSetRectRow['cantCol']
    var distRect = valuesSetRectRow['distRect']
    var x = valuesSetRectRow['x']
    var y = valuesSetRectRow['y']
    var w = valuesSetRectRow['w']
    var h = valuesSetRectRow['h']//((hCont - (distRect * (cantCol - 1))) / cantCol)
    var r = valuesSetRectRow['r']
    var fill = valuesSetRectRow['fill']
    var stroke = valuesSetRectRow['stroke']
    var filter = valuesSetRectRow['filter']
    var paddingTBEnc = valuesSetRectRow['paddingTBEnc']
    var paddingLREnc = valuesSetRectRow['paddingLREnc']
    var paddingTEnc = valuesSetRectRow['paddingTEnc']
    var paddingBEnc = valuesSetRectRow['paddingBEnc']
    var paddingLEnc = valuesSetRectRow['paddingLEnc']
    var paddingREnc = valuesSetRectRow['paddingREnc']
    var paddingTBDesc = valuesSetRectRow['paddingTBDesc']
    var paddingLRDesc = valuesSetRectRow['paddingLRDesc']
    var paddingTDesc = valuesSetRectRow['paddingTDesc']
    var paddingBDesc = valuesSetRectRow['paddingBDesc']
    var paddingLDesc = valuesSetRectRow['paddingLDesc']
    var paddingRDesc = valuesSetRectRow['paddingRDesc']
    var textAlignEnc = valuesSetRectRow['textAlignEnc']
    var fontEnc = valuesSetRectRow['fontEnc']
    var fontSizeEnc = valuesSetRectRow['fontSizeEnc']
    var marginEnc = valuesSetRectRow['marginEnc']
    var colorEnc = valuesSetRectRow['colorEnc']
    var boldEnc = valuesSetRectRow['boldEnc']
    var letterSpacingEnc = valuesSetRectRow['letterSpacingEnc']
    var lineHeightEnc = valuesSetRectRow['lineHeightEnc']
    var textAlignDesc = valuesSetRectRow['textAlignDesc']
    var fontDesc = valuesSetRectRow['fontDesc']
    var fontSizeDesc = valuesSetRectRow['fontSizeDesc']
    var marginDesc = valuesSetRectRow['marginDesc']
    var colorDesc = valuesSetRectRow['colorDesc']
    var boldDesc = valuesSetRectRow['boldDesc']
    var letterSpacingDesc = valuesSetRectRow['letterSpacingDesc']
    var lineHeightDesc = valuesSetRectRow['lineHeightDesc']

    if (paddingTEnc == undefined) {
        paddingTEnc = 0
    }
    if (paddingBEnc == undefined) {
        paddingBEnc = 0
    }
    if (paddingLEnc == undefined) {
        paddingLEnc = 0
    }
    if (paddingREnc == undefined) {
        paddingREnc = 0
    }

    if (paddingTDesc == undefined) {
        paddingTDesc = 0
    }
    if (paddingBDesc == undefined) {
        paddingBDesc = 0
    }
    if (paddingLDesc == undefined) {
        paddingLDesc = 0
    }
    if (paddingRDesc == undefined) {
        paddingRDesc = 0
    }

    var text = textSetRectRow

    if (cantCol <= text.length) {
        for (var i = 0; i < cantCol; i++) {
            gradientRect(svg,
                x,
                (y + (distRect * i) + (h * i)),
                w,
                h,
                r,
                r,
                fill,
                stroke,
                filter,
                id,
                1
            )
            setHtmlText(
                svg,
                1,
                id,
                x + (w * paddingLREnc) + (w * paddingLEnc),
                ((y + (h * paddingTBEnc)) + (distRect * i) + (h * i)),
                (w * (1 - (paddingLREnc * 2))),
                (h * (1 - (paddingTBEnc * 2))),
                text[i].enc,
                fontSizeEnc,
                fontEnc,
                textAlignEnc,
                marginEnc,
                colorEnc,
                boldEnc,
                letterSpacingEnc,
                lineHeightEnc
            )
            setHtmlText(
                svg,
                1,
                id,
                x + (w * paddingLRDesc) + (w * paddingLDesc),
                ((y + (h * paddingTBDesc)) + (distRect * i) + (h * i)),
                (w * (1 - (paddingLRDesc * 2))),
                (h * (1 - (paddingTBDesc * 2))),
                text[i].desc,
                fontSizeDesc,
                fontDesc,
                textAlignDesc,
                marginDesc,
                colorDesc,
                boldDesc,
                letterSpacingDesc,
                lineHeightDesc
            )
        }
    }
    else {
        for (var i = 0; i < cantCol; i++) {
            gradientRect(svg,
                x,
                (y + (distRect * i) + (h * i)),
                w,
                h,
                r,
                r,
                fill,
                stroke,
                filter,
                id,
                1
            )

        }
    }
}
export function setMenuInteriorV(valuesSetMenuInteriorV, contentMenuInterior) {
    var svg = valuesSetMenuInteriorV['svg']
    var id = valuesSetMenuInteriorV['id']
    var cantBotones = valuesSetMenuInteriorV['cantBotones']
    var distBotones = valuesSetMenuInteriorV['distBotones']
    var x = valuesSetMenuInteriorV['x']
    var y = valuesSetMenuInteriorV['y']
    var w = valuesSetMenuInteriorV['w']
    var h = valuesSetMenuInteriorV['h']
    var r = valuesSetMenuInteriorV['r']
    var textAlign = valuesSetMenuInteriorV['textAlign']
    var font = valuesSetMenuInteriorV['font']
    var fontSize = valuesSetMenuInteriorV['fontSize']
    var margin = valuesSetMenuInteriorV['margin']
    var color = valuesSetMenuInteriorV['color']
    var bold = valuesSetMenuInteriorV['bold']
    var letterSpacing = valuesSetMenuInteriorV['letterSpacing']
    var lineHeight = valuesSetMenuInteriorV['lineHeight']
    var fill = valuesSetMenuInteriorV['fill']
    var stroke = valuesSetMenuInteriorV['stroke']
    var filter = valuesSetMenuInteriorV['filter']

    var [_width, _height] = getWidthHeight();

    if (fill == undefined || fill == '') {
        fill = 'white'
    }
    if (stroke == undefined || stroke == '') {
        stroke = 'url(#bgLinGradC)'
    }
    if (filter == undefined || filter == '') {
        filter = 'url(#shadowFilter)'
    }

    var contentMenuInterior = contentMenuInterior


    for (var i = 0; i < cantBotones; i++) {
        svg.append('rect')
            .attr('id', id)
            .attr("x", x)
            .attr("y", (y + (distBotones * i) + (h * i)))
            .attr('width', w)
            .attr('height', h)
            .attr("rx", r)
            .attr("ry", r)
            .attr('fill', fill)
            .attr('stroke', stroke)
            .style("stroke-width", rp(3, 'x', _width, _height))
            .attr("filter", filter)

        setHtmlText(
            svg,
            1,
            id,
            x,
            (y + (distBotones * i) + (h * i)),
            w,
            h,
            contentMenuInterior[i].text,
            fontSize,
            font,
            textAlign,
            margin,
            color,
            bold,
            letterSpacing,
            lineHeight
        )
        svg.append("image")
            .attr('id', id)
            .attr("xlink:href", window.location.origin + contentMenuInterior[i].img)
            .attr("x", (x + (w * 0.1)))
            .attr("y", ((y + (w * 0.1)) + (distBotones * i) + (h * i)))
            .attr("width", w * 0.8)

    }
}
export function selectButtonV(valuesSetMenuInteriorV, id, contentMenuInterior) {
    var svg = valuesSetMenuInteriorV['svg']
    var cantBotones = valuesSetMenuInteriorV['cantBotones']
    var distBotones = valuesSetMenuInteriorV['distBotones']
    var x = valuesSetMenuInteriorV['x']
    var y = valuesSetMenuInteriorV['y']
    var w = valuesSetMenuInteriorV['w']
    var h = valuesSetMenuInteriorV['h']
    var r = valuesSetMenuInteriorV['r']
    var id = id

    var contentMenuInterior = contentMenuInterior

    if (id == undefined) {
        id = 0
    }

    for (var i = 0; i < cantBotones; i++) {
        svg.selectAll('#buttonClick' + i).remove()
        svg.selectAll('#buttonSelect' + i).remove()
    }
    for (var i = 0; i < cantBotones; i++) {
        svg.append('rect')
            .attr('id', 'buttonClick' + i)
            .attr('indexElement', i)
            .attr("x", x)
            .attr("y", (y + (distBotones * i) + (h * i)))
            .attr('width', w)
            .attr('height', h)
            .attr("rx", r)
            .attr("ry", r)
            .attr('fill', 'white')
            .attr('opacity', '0.7')
            .style("cursor", "pointer")
            .on('mouseover', function () {
                var index = d3.select(this).attr('indexElement');
                for (let a = 0; a < cantBotones; a++) {
                    svg.selectAll('#buttonClick' + a)
                        .attr('fill', 'white')
                        .attr('opacity', '0.7')
                }
                svg.selectAll('#buttonClick' + index)
                    .attr('fill', 'transparent')
                    .attr('opacity', '1')
            })
            .on('mouseout', function () {
                
                for (let a = 0; a < cantBotones; a++) {
                    svg.selectAll('#buttonClick' + a)
                        .attr('fill', 'white')
                        .attr('opacity', '0.7')
                }
            })
            .on('click', function () {
                var index = d3.select(this).attr('indexElement');
                for (let a = 0; a < cantBotones; a++) {
                    if (a == index) {
                        svg.selectAll('#' + contentMenuInterior[index].idAction)
                            .attr('opacity', 1)
                    }
                    else {
                        svg.selectAll('#' + contentMenuInterior[a].idAction)
                            .attr('opacity', 0);
                    }
                }
                selectButtonV(valuesSetMenuInteriorV, index, contentMenuInterior)
            })
        if (id == i) {
            svg.selectAll('#buttonClick' + i)
                .attr('id', 'buttonSelect' + i)
                .attr('fill', 'transparent')
                .attr('opacity', '1')
        }
    }
}
export function setMenuInteriorH(valuesSetMenuInteriorH, contentMenuInterior) {
    var svg = valuesSetMenuInteriorH['svg']
    var cantBotones = valuesSetMenuInteriorH['cantBotones']
    var distBotones = valuesSetMenuInteriorH['distBotones']
    var x = valuesSetMenuInteriorH['x']
    var y = valuesSetMenuInteriorH['y']
    var w = valuesSetMenuInteriorH['w']
    var h = valuesSetMenuInteriorH['h']
    var r = valuesSetMenuInteriorH['r']
    var textAlign = valuesSetMenuInteriorH['textAlign']
    var font = valuesSetMenuInteriorH['font']
    var fontSize = valuesSetMenuInteriorH['fontSize']
    var margin = valuesSetMenuInteriorH['margin']
    var color = valuesSetMenuInteriorH['color']
    var bold = valuesSetMenuInteriorH['bold']
    var letterSpacing = valuesSetMenuInteriorH['letterSpacing']
    var lineHeight = valuesSetMenuInteriorH['lineHeight'];

    var contentMenuInterior = contentMenuInterior;

    var [_width, _height] = getWidthHeight();

    var id = 'text__'

    for (var i = 0; i < cantBotones; i++) {
        svg.append('rect')
            .attr('id', 'id')
            .attr("x", (x + (distBotones * i) + (w * i)))
            .attr("y", y)
            .attr('width', w)
            .attr('height', h)
            .attr("rx", r)
            .attr("ry", r)
            .attr('fill', 'white')
            .attr('stroke', 'url(#bgLinGradC)')
            .style("stroke-width", rp(3, 'x', _width, _height))
            .attr("filter", 'url(#shadowFilter)')

        setHtmlText(
            svg,
            1,
            id,
            (x + (distBotones * i) + (w * i)),
            y,
            w,
            h,
            //contentMenuInterior[i].text,
            contentMenuInterior[i][1],
            fontSize,
            font,
            textAlign,
            margin,
            color,
            bold,
            letterSpacing,
            lineHeight
        )

    }
}
export function selectButtonH(valuesSetMenuInteriorH, id, contentMenuInterior) {

    var svg = valuesSetMenuInteriorH['svg']
    var cantBotones = valuesSetMenuInteriorH['cantBotones']
    var distBotones = valuesSetMenuInteriorH['distBotones']
    var x = valuesSetMenuInteriorH['x']
    var y = valuesSetMenuInteriorH['y']
    var w = valuesSetMenuInteriorH['w']
    var h = valuesSetMenuInteriorH['h']
    var r = valuesSetMenuInteriorH['r']
    var id = id;
    //console.log('valuesSetMenuInteriorH[cantBotones]' + valuesSetMenuInteriorH['cantBotones']);
    if (id == undefined) {
        id = 0
    }

    var contentMenuInterior = contentMenuInterior

    for (var i = 0; i < cantBotones; i++) {
        svg.selectAll('#buttonClick' + i).remove()
        svg.selectAll('#buttonSelect' + i).remove()
    }
    for (var i = 0; i < cantBotones; i++) {
        svg.append('rect')
            .attr('id', 'buttonClick' + i)
            .attr('indexElement', i)
            .attr("x", (x + (distBotones * i) + (w * i)))
            .attr("y", y)
            .attr('width', w)
            .attr('height', h)
            .attr("rx", r)
            .attr("ry", r)
            .attr('fill', 'white')
            .attr('opacity', '0.5')
            .on('mouseover', function (d) {

                for (let a = 0; a < cantBotones; a++) {
                    svg.selectAll('#buttonClick' + a)
                        .attr('fill', 'white')
                        .attr('opacity', '0.5')
                }
                svg.selectAll('#buttonClick' + i)
                    .attr('fill', 'transparent')
                    .attr('opacity', '1')
            })
            .on('mouseout', function () {
                for (let a = 0; a < cantBotones; a++) {
                    svg.selectAll('#buttonClick' + a)
                        .attr('fill', 'white')
                        .attr('opacity', '0.5')
                }
            })
            .on('click', function () {
                var index = d3.select(this).attr('indexElement');
                for (let a = 0; a < cantBotones; a++) {
                    if (a == index) {
                        svg.selectAll('#' + contentMenuInterior[index][2])
                            .attr('opacity', 1)
                    }
                    else {
                        svg.selectAll('#' + contentMenuInterior[a][2])
                            .attr('opacity', 0);
                    }
                }
                selectButtonH(valuesSetMenuInteriorH, index, contentMenuInterior)
            })
        if (id == i) {
            svg.selectAll('#buttonClick' + i)
                .attr('id', 'buttonSelect' + i)
                .attr('fill', 'transparent')
                .attr('opacity', '1')
        }
    }
}
export function setArrowDownWS(valuesSetArrowDownWS) {

    var svg = valuesSetArrowDownWS['svg']
    var id = valuesSetArrowDownWS['id']
    var wCont = valuesSetArrowDownWS['wCont']
    var cantRect = valuesSetArrowDownWS['cantRect']
    var distRect = valuesSetArrowDownWS['distRect']
    var altArrow = valuesSetArrowDownWS['altArrow']
    var strokeW = valuesSetArrowDownWS['strokeW']
    var x = valuesSetArrowDownWS['x']
    var y = valuesSetArrowDownWS['y']
    var w = ((wCont - (distRect * (cantRect - 1))) / cantRect)
    var h = valuesSetArrowDownWS['h']
    var arrow = valuesSetArrowDownWS['arrow']

    var markerEnd = "url(#triangle)"

    if (arrow == 'n') {
        markerEnd = ''
    }

    for (var i = 0; i < cantRect; i++) {
        svg.append('line')
            .attr('id', id)
            .style("stroke", "#93278F")
            .style("stroke-width", strokeW)
            .attr("x1", (x + (distRect * i) + (w * i)) + ((w / 3) * 2.5))
            .attr("y1", y)
            .attr("x2", (x + (distRect * i) + (w * i)) + ((w / 3) * 2.5))
            .attr("y2", y + altArrow)
            .attr("marker-end", markerEnd)
    }
}
export function setArrowUpWS(valuesSetArrowUpWS) {
    var [_width, _height] = getWidthHeight();

    var svg = valuesSetArrowUpWS['svg']
    var id = valuesSetArrowUpWS['id']
    var wCont = valuesSetArrowUpWS['wCont']
    var cantRect = valuesSetArrowUpWS['cantRect']
    var distRect = valuesSetArrowUpWS['distRect']
    var altArrow = rp(20, 'x', _width, _height)//valuesSetArrowUpWS['altArrow']
    var x = valuesSetArrowUpWS['x']
    var y = rp(260, 'x', _width, _height)//valuesSetArrowUpWS['y']
    var w = ((wCont - (distRect * (cantRect - 1))) / cantRect)
    var h = valuesSetArrowUpWS['h']
    var arrow = valuesSetArrowUpWS['arrow']

    var markerEnd = "url(#triangle)"

    if (arrow == 'n') {
        markerEnd = ''
    }

    for (var i = 0; i < cantRect; i++) {
        var [_width, _height] = getWidthHeight();

        svg.append('line')
            .attr('id', id)
            .style("stroke", "#93278F")
            .style("stroke-width", rp(6.04, 'x', _width, _height))
            .attr("x1", (x + (distRect * i) + (w * i)) + ((w / 3) * 2.5))
            .attr("y1", y + altArrow)
            .attr("x2", (x + (distRect * i) + (w * i)) + ((w / 3) * 2.5))
            .attr("y2", y)
            .attr("marker-end", markerEnd)
    }
}
export function setArrowDown(valuesSetArrowDown) {

    var svg = valuesSetArrowDown['svg']
    var id = valuesSetArrowDown['id']
    var wCont = valuesSetArrowDown['wCont']
    var cantRect = valuesSetArrowDown['cantRect']
    var distRect = valuesSetArrowDown['distRect']
    var altArrow = valuesSetArrowDown['altArrow']
    var strokeW = valuesSetArrowDown['strokeW']
    var x = valuesSetArrowDown['x']
    var y = valuesSetArrowDown['y']
    var w = ((wCont - (distRect * (cantRect - 1))) / cantRect)
    var h = valuesSetArrowDown['h']
    var arrow = valuesSetArrowDown['arrow']

    var markerEnd = "url(#triangle)"

    if (arrow == 'n') {
        markerEnd = ''
    }

    for (var i = 0; i < cantRect; i++) {
        svg.append('line')
            .attr('id', id)
            .style("stroke", "#93278F")
            .style("stroke-width", strokeW)
            .attr("x1", (x + (distRect * i) + (w * i)) + ((w / 2)))
            .attr("y1", y)
            .attr("x2", (x + (distRect * i) + (w * i)) + ((w / 2)))
            .attr("y2", y + altArrow)
            .attr("marker-end", markerEnd)
    }
}
export function setArrowUp(valuesSetArrowUp) {

    var svg = valuesSetArrowUp['svg']
    var id = valuesSetArrowUp['id']
    var wCont = valuesSetArrowUp['wCont']
    var cantRect = valuesSetArrowUp['cantRect']
    var distRect = valuesSetArrowUp['distRect']
    var altArrow = valuesSetArrowUp['altArrow']
    var strokeW = valuesSetArrowUp['strokeW']
    var x = valuesSetArrowUp['x']
    var y = valuesSetArrowUp['y']
    var w = ((wCont - (distRect * (cantRect - 1))) / cantRect)
    var h = valuesSetArrowUp['h']
    var arrow = valuesSetArrowUp['arrow']

    var markerEnd = "url(#triangle)"

    if (arrow == 'n') {
        markerEnd = ''
    }

    for (var i = 0; i < cantRect; i++) {
        svg.append('line')
            .attr('id', id)
            .style("stroke", "#93278F")
            .style("stroke-width", strokeW)
            .attr("x1", (x + (distRect * i) + (w * i)) + ((w / 2)))
            .attr("y1", y + altArrow)
            .attr("x2", (x + (distRect * i) + (w * i)) + ((w / 2)))
            .attr("y2", y)
            .attr("marker-end", markerEnd)
    }
}
export function setArrowLeft(valuesSetArrowLeft) {

    var svg = valuesSetArrowLeft['svg']
    var id = valuesSetArrowLeft['id']
    var wCont = valuesSetArrowLeft['wCont']
    var cantRect = valuesSetArrowLeft['cantRect']
    var distRect = valuesSetArrowLeft['distRect']
    var largeArrow = valuesSetArrowLeft['largeArrow']
    var strokeW = valuesSetArrowLeft['strokeW']
    var x = valuesSetArrowLeft['x']
    var y = valuesSetArrowLeft['y']
    var w = ((wCont - (distRect * (cantRect - 1))) / cantRect)
    var h = valuesSetArrowLeft['h']
    var arrow = valuesSetArrowLeft['arrow']

    var markerEnd = "url(#triangle)"

    if (arrow == 'n') {
        markerEnd = ''
    }

    for (var i = 0; i < cantRect; i++) {
        svg.append('line')
            .attr('id', id)
            .style("stroke", "#93278F")
            .style("stroke-width", strokeW)
            .attr("x1", x + largeArrow)
            .attr("y1", y)
            .attr("x2", x)
            .attr("y2", y)
            .attr("marker-end", markerEnd)
    }
}
export function setArrowRight(valuesSetArrowRight) {

    var svg = valuesSetArrowRight['svg']
    var id = valuesSetArrowRight['id']
    var wCont = valuesSetArrowRight['wCont']
    var cantRect = valuesSetArrowRight['cantRect']
    var distRect = valuesSetArrowRight['distRect']
    var largeArrow = valuesSetArrowRight['largeArrow']
    var strokeW = valuesSetArrowRight['strokeW']
    var x = valuesSetArrowRight['x']
    var y = valuesSetArrowRight['y']
    var w = ((wCont - (distRect * (cantRect - 1))) / cantRect)
    var h = valuesSetArrowRight['h']
    var arrow = valuesSetArrowRight['arrow']

    var markerEnd = "url(#triangle)"

    if (arrow == 'n') {
        markerEnd = ''
    }

    for (var i = 0; i < cantRect; i++) {
        svg.append('line')
            .attr('id', id)
            .style("stroke", "#93278F")
            .style("stroke-width", strokeW)
            .attr("x1", x)
            .attr("y1", y)
            .attr("x2", x + largeArrow)
            .attr("y2", y)
            .attr("marker-end", markerEnd)
    }
}
export function updateHtmlText(opacity, id, x, y, w, h, texto, fontSize, font, align, margin, color, bold, letterSpacing, lineHeight, duration, padding) {

    if (opacity == 1) {

        var boldParam1 = '';
        var boldParam2 = '';
        if (bold == 'bold') {
            boldParam1 = '<b style="color:' + color + '">';
            boldParam2 = '</b>';
        }
        d3.select('#' + id)
            .attr('x', x)
            .attr('y', y)
            .attr("width", w)
            .attr("height", h)
            .html(function (d) {
                return '<div style="line-height: ' + lineHeight + ';text-align: ' + align + '; margin: ' + margin + ';padding:' + padding + 'px 0"><p align="" style="color: ' + color + '; letter-spacing:' + letterSpacing + 'px">' + boldParam1 + texto + boldParam2 + '</p></div>'
            })
            .attr("font-size", fontSize)
            .style("font-family", font)
            .transition()
            .duration(duration)
            .attr('opacity', opacity);
    } else {
        d3.select('#' + id).attr('opacity', opacity);
    }
}