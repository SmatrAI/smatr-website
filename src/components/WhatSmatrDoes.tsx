import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plane, DollarSign, Ticket, Sparkles } from "lucide-react";

const WhatSmatrDoes = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      user: "Book a flight from New York to Paris for next week",
      smatr: "I'll help you find the best flights. Let me search across multiple airlines...",
      icon: <Plane className="w-6 h-6" />,
      color: "smatr-sky"
    },
    {
      user: "Compare prices for me",
      smatr: "Found 15 options! Here are the best deals:\n• Delta: $650 (direct)\n• Air France: $580 (1 stop)\n• United: $620 (direct)",
      icon: <DollarSign className="w-6 h-6" />,
      color: "smatr-teal"
    },
    {
      user: "Check if I have any vouchers I can use",
      smatr: "Great news! I found a 15% off voucher for Air France in your account. This brings your total to $493!",
      icon: <Ticket className="w-6 h-6" />,
      color: "smatr-coral"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-urbanist font-bold text-primary mb-6">
            See Smatr in Action
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto font-inter">
            Watch how Smatr helps you complete complex tasks with intelligent automation
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Interactive Demo */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            {/* Chat Header */}
            <div className="bg-gradient-hero p-6 text-white">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-urbanist font-semibold">Smatr Assistant</h3>
                  <p className="text-sm opacity-90">Your smart web companion</p>
                </div>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="p-6 space-y-6 min-h-[400px] bg-gray-50">
              {steps.slice(0, currentStep + 1).map((step, index) => (
                <div key={index} className="space-y-4">
                  {/* User Message */}
                  <div className="flex justify-end">
                    <div className="bg-primary text-primary-foreground rounded-2xl rounded-tr-md px-6 py-4 max-w-xs">
                      <p className="font-inter">{step.user}</p>
                    </div>
                  </div>

                  {/* Smatr Response */}
                  <div className="flex items-start space-x-3">
                    <div className={`w-10 h-10 bg-${step.color} rounded-full flex items-center justify-center text-white flex-shrink-0`}>
                      {step.icon}
                    </div>
                    <div className="bg-white rounded-2xl rounded-tl-md px-6 py-4 max-w-md shadow-sm border">
                      <p className="font-inter whitespace-pre-line">{step.smatr}</p>
                      {index === 2 && (
                        <div className="mt-3 p-3 bg-smatr-yellow/10 rounded-lg border border-smatr-yellow/20">
                          <p className="text-sm font-semibold text-smatr-yellow">💰 Voucher Applied!</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {/* Loading indicator for next step */}
              {currentStep < steps.length - 1 && (
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                  </div>
                  <div className="bg-gray-200 rounded-2xl px-4 py-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Controls */}
            <div className="p-6 bg-white border-t border-gray-100">
              <div className="flex items-center justify-between">
                <div className="flex space-x-2">
                  {steps.map((_, index) => (
                    <div
                      key={index}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index <= currentStep ? 'bg-primary' : 'bg-gray-200'
                      }`}
                    />
                  ))}
                </div>
                <div className="flex space-x-3">
                  <Button
                    variant="outline"
                    onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                    disabled={currentStep === 0}
                    className="font-inter"
                  >
                    Previous
                  </Button>
                  <Button
                    onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
                    disabled={currentStep === steps.length - 1}
                    className="bg-primary hover:bg-primary/90 font-inter"
                  >
                    {currentStep === steps.length - 1 ? 'Complete' : 'Next'}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatSmatrDoes;