import React from 'react';
import {
    Category,
    Component,
    Variant,
    Palette,
} from '@react-buddy/ide-toolbox';

export const PaletteTree = () => (
    <Palette>
        <Category name="HTML">
            <Component name="a">
                <Variant requiredParams={['href']}>
                    <a>Link</a>
                </Variant>
            </Component>
            <Component name="button">
                <Variant>
                    <button>Button</button>
                </Variant>
            </Component>
            <Component name="form">
                <Variant>
                    <form>
                        <input type="text" placeholder="Enter your name" />
                        <textarea placeholder="Enter a message"></textarea>
                        <select>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                    </form>
                </Variant>
            </Component>
            <Component name="ul">
                <Variant>
                    <ul>
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                    </ul>
                </Variant>
            </Component>
            <Component name="table">
                <Variant>
                    <table>
                        <tr>
                            <th>Column 1</th>
                            <th>Column 2</th>
                        </tr>
                        <tr>
                            <td>Row 1, Column 1</td>
                            <td>Row 1, Column 2</td>
                        </tr>
                        <tr>
                            <td>Row 2, Column 1</td>
                            <td>Row 2, Column 2</td>
                        </tr>
                    </table>
                </Variant>
            </Component>
            <Component name="img">
                <Variant requiredParams={['src']}>
                    <img src="https://picsum.photos/200" alt="A random image" />
                </Variant>
            </Component>
            <Component name="header">
                <Variant>
                    <header>
                        <h1>Header</h1>
                    </header>
                </Variant>
            </Component>
            <Component name="footer">
                <Variant>
                    <footer>
                        <p>Footer</p>
                    </footer>
                </Variant>
            </Component>
            <Component name="nav">
                <Variant>
                    <nav>
                        <a href="/home">Home</a>
                        <a href="/about">About</a>
                        <a href="/contact">Contact</a>
                    </nav>
                </Variant>
            </Component>
        </Category>
    </Palette>
);