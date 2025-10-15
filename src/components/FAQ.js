import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi2';

const FAQSection = styled(motion.section)`
  padding: ${props => props.theme.spacing['5xl']} 0;
  background: ${props => props.theme.colors.background};
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.lg};
`;

const SectionHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: ${props => props.theme.spacing['4xl']};
`;

const SectionTitle = styled(motion.h2)`
  font-size: ${props => props.theme.typography.fontSize['6xl']};
  font-weight: ${props => props.theme.typography.fontWeight.extrabold};
  color: ${props => props.theme.colors.textPrimary};
  margin-bottom: ${props => props.theme.spacing.lg};
  line-height: 1.1;
  letter-spacing: -0.02em;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: ${props => props.theme.typography.fontSize['5xl']};
  }
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    font-size: ${props => props.theme.typography.fontSize['4xl']};
  }
`;

const SectionSubtitle = styled(motion.p)`
  font-size: ${props => props.theme.typography.fontSize.lg};
  color: ${props => props.theme.colors.textSecondary};
  max-width: 600px;
  margin: 0 auto;
  line-height: ${props => props.theme.typography.lineHeight.relaxed};
`;

const FAQContainer = styled(motion.div)`
  max-width: 800px;
  margin: 0 auto;
`;

const FAQItem = styled(motion.div)`
  background: ${props => props.theme.colors.backgroundSecondary};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.xl};
  margin-bottom: ${props => props.theme.spacing.lg};
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${props => props.theme.colors.primary};
    box-shadow: ${props => props.theme.shadows.md};
  }
`;

const FAQQuestion = styled(motion.button)`
  width: 100%;
  padding: ${props => props.theme.spacing.xl};
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${props => props.theme.spacing.md};
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme.colors.background};
  }
`;

const QuestionText = styled.h3`
  font-size: ${props => props.theme.typography.fontSize.lg};
  font-weight: ${props => props.theme.typography.fontWeight.semibold};
  color: ${props => props.theme.colors.textPrimary};
  margin: 0;
  flex: 1;
`;

const QuestionIcon = styled(motion.div)`
  color: ${props => props.theme.colors.primary};
  flex-shrink: 0;
`;

const FAQAnswer = styled(motion.div)`
  padding: ${props => props.theme.spacing.lg} ${props => props.theme.spacing.xl} ${props => props.theme.spacing.xl};
  border-top: 1px solid ${props => props.theme.colors.border};
  overflow: hidden;
`;

const AnswerText = styled.p`
  font-size: ${props => props.theme.typography.fontSize.base};
  color: ${props => props.theme.colors.textSecondary};
  line-height: ${props => props.theme.typography.lineHeight.relaxed};
  margin: 0;
`;

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Bạn có làm app mobile không? Công nghệ gì?",
      answer: "Có! Chúng tôi phát triển app Android & iOS với React Native và Flutter. Cross-platform, hiệu suất cao, tích hợp được các tính năng như AI, thanh toán, realtime... Deploy lên App Store & Google Play."
    },
    {
      question: "Có làm chatbot AI không? Tích hợp được những gì?",
      answer: "Có! Chúng tôi chuyên làm chatbot AI với OpenAI, Claude, custom training. Tích hợp vào website, Zalo, Facebook Messenger, Telegram. Có thể trả lời tự động, RAG system, phân tích dữ liệu khách hàng."
    },
    {
      question: "Làm đồ án CNTT có đảm bảo chất lượng không?",
      answer: "Đảm bảo 100%! Chúng tôi có kinh nghiệm làm đồ án tốt nghiệp, đồ án môn học các cấp. Code clean, có document đầy đủ, hướng dẫn demo, bảo vệ. Bảo hành đến khi bạn bảo vệ xong."
    },
    {
      question: "Thời gian hoàn thành dự án bao lâu?",
      answer: "Website: 3-10 ngày | App Mobile: 1-2 tuần | Chatbot AI: 1-2 ngày | Đồ án CNTT: 1-2 tuần. Tùy độ phức tạp. Chúng tôi cam kết bàn giao đúng hẹn."
    },
    {
      question: "Có hỗ trợ sau bàn giao không?",
      answer: "Có! Bảo hành 12 tháng cho tất cả dự án. Hỗ trợ sửa lỗi, cập nhật tính năng miễn phí. Hướng dẫn sử dụng, training cho team bạn. Hotline 24/7 qua Zalo."
    },
    {
      question: "Công nghệ sử dụng có hiện đại không?",
      answer: "Chúng tôi luôn dùng công nghệ mới nhất: React, Next.js, Node.js, Python, AI (OpenAI, Claude), Cloud (AWS, GCP), Docker, CI/CD... Đảm bảo code chất lượng, scalable, bảo mật cao."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <FAQSection id="faq">
      <Container>
        <SectionHeader
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SectionTitle>
            Câu hỏi thường gặp
          </SectionTitle>
          <SectionSubtitle>
            Giải đáp những thắc mắc phổ biến của khách hàng
          </SectionSubtitle>
        </SectionHeader>

        <FAQContainer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <FAQQuestion
                onClick={() => toggleFAQ(index)}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <QuestionText>{faq.question}</QuestionText>
                <QuestionIcon
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                >
                  {openIndex === index ? <HiChevronUp size={24} /> : <HiChevronDown size={24} />}
                </QuestionIcon>
              </FAQQuestion>
              
              <AnimatePresence>
                {openIndex === index && (
                  <FAQAnswer
                    initial={{ height: 0, opacity: 0, paddingTop: 0, paddingBottom: 0 }}
                    animate={{ height: 'auto', opacity: 1, paddingTop: '1.5rem', paddingBottom: '1.5rem' }}
                    exit={{ height: 0, opacity: 0, paddingTop: 0, paddingBottom: 0 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                  >
                    <AnswerText>{faq.answer}</AnswerText>
                  </FAQAnswer>
                )}
              </AnimatePresence>
            </FAQItem>
          ))}
        </FAQContainer>
      </Container>
    </FAQSection>
  );
};

export default FAQ;