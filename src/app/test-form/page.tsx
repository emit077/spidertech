'use client';

import React, { useState } from 'react';
import { testGoogleFormsURL, testEntryIDs, submitToGoogleForms } from '@/config/google-forms';

export default function TestFormPage() {
    const [testResults, setTestResults] = useState<string[]>([]);
    const [isTesting, setIsTesting] = useState(false);

    const addResult = (message: string) => {
        setTestResults(prev => [...prev, `${new Date().toLocaleTimeString()}: ${message}`]);
    };

    const runTests = async () => {
        setIsTesting(true);
        setTestResults([]);

        addResult('Starting Google Forms tests...');

        try {
            // Test 1: URL Accessibility
            addResult('Testing URL accessibility...');
            const urlAccessible = await testGoogleFormsURL();
            addResult(urlAccessible ? '✅ URL is accessible' : '❌ URL is not accessible');

            if (!urlAccessible) {
                addResult('❌ URL test failed - stopping tests');
                return;
            }

            // Test 2: Entry IDs
            addResult('Testing entry IDs...');
            const entryIdsValid = await testEntryIDs();
            addResult(entryIdsValid ? '✅ Entry IDs are valid' : '❌ Entry IDs are invalid');

            if (!entryIdsValid) {
                addResult('❌ Entry ID test failed - stopping tests');
                return;
            }

            // Test 3: Full form submission
            addResult('Testing full form submission...');
            const testData = {
                name: 'Test User',
                email: 'test@example.com',
                phone: '9876543210',
                project_type: 'Web Development',
                message: 'This is a test message from the debug page.'
            };

            const submissionSuccess = await submitToGoogleForms(testData);
            addResult(submissionSuccess ? '✅ Form submission successful' : '❌ Form submission failed');

            addResult('🎉 All tests completed!');

        } catch (error) {
            addResult(`❌ Test error: ${error}`);
        } finally {
            setIsTesting(false);
        }
    };

    const clearResults = () => {
        setTestResults([]);
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                        Google Forms Debug Test
                    </h1>

                    <div className="mb-8">
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            This page helps debug Google Forms integration issues. Click the button below to run comprehensive tests.
                        </p>

                        <div className="flex gap-4">
                            <button
                                onClick={runTests}
                                disabled={isTesting}
                                className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                            >
                                {isTesting ? 'Running Tests...' : 'Run Tests'}
                            </button>

                            <button
                                onClick={clearResults}
                                className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                            >
                                Clear Results
                            </button>
                        </div>
                    </div>

                    <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                            Test Results
                        </h2>

                        {testResults.length === 0 ? (
                            <p className="text-gray-500 dark:text-gray-400">
                                No test results yet. Click &quot;Run Tests&quot; to start debugging.
                            </p>
                        ) : (
                            <div className="space-y-2">
                                {testResults.map((result, index) => (
                                    <div
                                        key={index}
                                        className={`p-2 rounded text-sm font-mono ${result.includes('✅')
                                            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                                            : result.includes('❌')
                                                ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                                                : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                                            }`}
                                    >
                                        {result}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="mt-8 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                        <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                            Debug Instructions
                        </h3>
                        <ul className="text-yellow-700 dark:text-yellow-300 text-sm space-y-1">
                            <li>• Open browser developer tools (F12) to see detailed console logs</li>
                            <li>• Check the Network tab to see the actual HTTP requests</li>
                            <li>• If tests fail, check the console for specific error messages</li>
                            <li>• Verify your Google Form URL and entry IDs are correct</li>
                            <li>• Make sure your Google Form is published and publicly accessible</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
