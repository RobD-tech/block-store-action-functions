import documentParser from '../document-parser';
import generatePDF from '../generate-pdf';
import gql from '../gql';
import parseToGqlFragment from '../parse-to-gql-fragment';
import runAction from '../run-action';
import parseData from '../parse-data';
import generativeAI from '../generative-ai';
import searchCollection from '../search-collection';

global.documentParser = documentParser;
global.generatePDF = generatePDF;
global.gql = gql;
global.parseToGqlFragment = parseToGqlFragment;
global.runAction = runAction;
global.parseData = parseData;
global.generativeAI = generativeAI;
global.searchCollection = searchCollection;
